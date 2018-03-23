import axios from "axios";

const initialState = {
  user: {},
  menu: {}
};

const HANDLE_LOGIN = "HANDLE_LOGIN";
const HANDLE_REGISTER = "HANDLE_REGISTER";
const GET_MENU = "GET_MENU";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${HANDLE_LOGIN}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${HANDLE_LOGIN}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    case `${HANDLE_LOGIN}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      });
    case `${HANDLE_REGISTER}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${HANDLE_REGISTER}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    case `${HANDLE_REGISTER}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      });
    case `${GET_MENU}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_MENU}_REJECTED`:
      return Object.assign({}, state, { isLoading: false, didErr: true });
    case `${GET_MENU}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        menu: action.payload
      });
    default:
      return state;
  }
}

export function handleLogin(username, password) {
  // console.log("hit", username, password);
  return {
    type: HANDLE_LOGIN,
    payload: axios
      .get("/api/getUser", { username, password })
      .then(resp => {
        return resp.data;
      })
      .catch(console.log)
  };
}

export function handleRegister(username, password) {
  // console.log("hit", username, password);
  return {
    type: HANDLE_REGISTER,
    payload: axios
      .post("/api/addUser", { username, password })
      .then(resp => {
        return resp.data;
      })
      .catch(console.log)
  };
}

export function getMenu() {
  console.log("hit getmenu");
  return {
    type: GET_MENU,
    payload: axios
      .get("api/getMenu")
      .then(resp => {
        console.log(resp);
        return resp.data;
      })
      .catch(console.log)
  };
}
