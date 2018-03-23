require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const cors = require("cors");
// const passport = require("passport");
const massive = require('massive');
// const Auth0Strategy = require('passport-auth0');
const ctrl = require ('./controller.js');

const app = express();

app.use(json());
app.use(cors());

const {
  CONNECTION_STRING,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  SESSION_SECRET
} = process.env;

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10000000
    }
  })
);

app.get('/api/getUser', ctrl.getUser);
app.post('/api/addUser', ctrl.addUser);
app.get('/api/getMenu', ctrl.getMenu);


const port = 3001;
app.listen(port, console.log(`Listening on port ${port}`));