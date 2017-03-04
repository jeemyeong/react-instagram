import * as types from '../actions/actionTypes';

const initialState = {
  authed: false
};

export default function auth(state = initialState, action) {

	switch(action.type) {
    case types.AUTH_LOGIN_FULFILLED:
      return {
        ...state,
        authed: true,
        user: action.user
      }
    case types.AUTH_LOGOUT_FULFILLED:
      return {
        ...state,
        authed: false
      }
		default:
			return state;
	}
}
