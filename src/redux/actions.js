import { auth } from "../api/firebase";

export const CHECK_LOGIN = "CHECK_LOGIN";

export const REGISTER_REQUEST = "USERS_REGISTER_REQUEST";
export const REGISTER_SUCCESS = "USERS_REGISTER_SUCCESS";
export const REGISTER_FAILURE = "USERS_REGISTER_FAILURE";

export const LOGIN_REQUEST = "USERS_LOGIN_REQUEST";
export const LOGIN_SUCCESS = "USERS_LOGIN_SUCCESS";
export const LOGIN_FAILURE = "USERS_LOGIN_FAILURE";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

const checkLogin = () => async (dispatch) => {
  if (localStorage.getItem("access_token")) {
    dispatch({
      type: CHECK_LOGIN,
      payload: {
        isLogin: !!localStorage.getItem("access_token"),
      },
    });
  }
};

const createUser = (email, password, history) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    auth.createUserWithEmailAndPassword(email, password).then(() => {
      auth.onAuthStateChanged(function (user) {
        user.sendEmailVerification();
      });
      dispatch({ type: REGISTER_SUCCESS });
      history.push("/sign-in");
    });
  } catch {
    dispatch({ type: REGISTER_FAILURE });
  }
};

const loginUser = (email, password, history) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        let access_token = res.user.za;
        localStorage.setItem("access_token", access_token);
        dispatch({ type: LOGIN_SUCCESS });
        history.push("/dashboard");
      })
      .catch(() => {
        dispatch({ type: LOGIN_FAILURE });
      });
  } catch (e) {
    dispatch({ type: LOGIN_FAILURE });
  }
};

const logoutActions = (history) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem("access_token");
        dispatch({ type: LOGOUT_SUCCESS });
        history.push("/sign-in");
      })
      .catch(() => {
        dispatch({ type: LOGOUT_FAILURE });
      });
  } catch (e) {
    dispatch({ type: LOGOUT_FAILURE });
  }
};

export { createUser, loginUser, checkLogin, logoutActions };
