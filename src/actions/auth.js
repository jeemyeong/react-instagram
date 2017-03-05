import * as types from './actionTypes';

export const authLoginRequesting = (email, pw) => ({
  type: types.AUTH_LOGIN_REQUESTING,
  email,
  pw
});

export const authLoginRequested = () => ({
  type: types.AUTH_LOGIN_REQUESTED,
});

export const authLoginFulfilled = (message) => ({
  type: types.AUTH_LOGIN_FULFILLED,
  message
});

export const authLoginRejected = () => ({
  type: types.AUTH_LOGIN_REJECTED,
});

export const authLoginDetected = (user) => ({
  type: types.AUTH_LOGIN_DETECTED,
  user
});

export const authLogoutRequesting = () => ({
  type: types.AUTH_LOGOUT_REQUESTING,
});

export const authLogoutRequested = () => ({
  type: types.AUTH_LOGOUT_REQUESTED,
});

export const authLogoutFulfilled = (message) => ({
  type: types.AUTH_LOGOUT_FULFILLED,
  message
});

export const authLogoutRejected = () => ({
  type: types.AUTH_LOGOUT_REJECTED,
});

export const hideAuthMessage = () => ({
  type: types.HIDE_AUTH_MESSAGE
});

export const authLogoutDetected = () => ({
  type: types.AUTH_LOGOUT_DETECTED,
});

export const authRegisterRequesting = (email, pw) => ({
  type: types.AUTH_REGISTER_REQUESTING,
  email,
  pw
});

export const authRegisterRequested = () => ({
  type: types.AUTH_REGISTER_REQUESTED
});

export const authRegisterRejected = (message) => ({
  type: types.AUTH_REGISTER_REJECTED,
  message
});

export const authRegisterFulfilled = (message) => ({
  type: types.AUTH_REGISTER_FULFILLED,
  message
});
