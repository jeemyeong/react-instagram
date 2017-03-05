import * as types from '../actions/actionTypes';

const initialState = {
  authed: false,
  messageVisibility: false,
  message: '',
  userInfo: {}

};

export default function auth(state = initialState, action) {

	switch(action.type) {
    case types.AUTH_LOGIN_DETECTED:
      return {
        ...state,
      }
    case types.AUTH_LOGIN_GET_USER_INFO:
      return {
        ...state,
        authed: true,
        userInfo: action.userInfo,
        messageVisibility: true,
        message: action.message
      }
    case types.AUTH_LOGOUT_DETECTED:
      return {
        ...state,
        authed: false,
      }
    case types.AUTH_REGISTER_REJECTED:
      return {
        ...state,
        requested: false,
        messageVisibility: true,
        message: action.message
      }
    case types.AUTH_REGISTER_FULFILLED:
      return {
        ...state,
        requested: false,
      }
    case types.AUTH_LOGIN_FULFILLED:
      return {
        ...state,
        requested: false,
      }
    case types.AUTH_LOGOUT_FULFILLED:
      return {
        ...state,
        requested: false,
        messageVisibility: true,
        message: action.message
      }

    case types.HIDE_AUTH_MESSAGE:
      return {
        ...state,
        messageVisibility: false
      }

		default:
			return state;
	}
}
