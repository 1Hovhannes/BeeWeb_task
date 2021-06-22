import {
  CHECK_LOGIN,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./actions";

const INITIAL_STATE = {
  loading: false,
  isLogin: false,
};

export function authentication(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogin: true,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLogin: false,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogin: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLogin: false,
        loading: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogin: false,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLogin: false,
      };
    case CHECK_LOGIN:
      return {
        ...state,
        isLogin: action.payload.isLogin,
      };
    default:
      return state;
  }
}

export default authentication;
