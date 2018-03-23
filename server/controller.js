const getUser = (req, res, next) => {
  console.log("hit", req.body);
  const db = req.app.get("db");
  const { username, password } = req.body;
  db
    .get_user([username, password])
    .then(user => {
      req.session.user = user;
      res.status(200).send(user);
    })
    .catch(() => res.status(500).send());
};

const addUser = (req, res, next) => {
  console.log("hit", req.body);
  const db = req.app.get("db");
  const { username, password } = req.body;
  db
    .add_user([username, password])
    .then(user => {
      req.session.user = user;
      res.status(200).send(user);
    })
    .catch(() => res.status(500).send());
};

const getMenu = (req, res, next) => {
  console.log("hit");
  const db = req.app.get("db");
  db
    .get_menu()
    .then(resp => res.status(200).send(resp))
    .catch(() => res.status(500).send());
};

module.exports = {
  getUser,
  addUser,
  getMenu
};
