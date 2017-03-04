import * as types from './actionTypes';

export const authLoginRequesting = (email, pw) => ({
  type: types.AUTH_LOGIN_REQUESTING,
  email,
  pw
});

export const authLoginFulfilled = (user) => ({
  type: types.AUTH_LOGIN_FULFILLED,
  user
});

export const authLoginRejected = () => ({
  type: types.AUTH_LOGIN_REJECTED,
});

export const authLogoutRequesting = () => ({
  type: types.AUTH_LOGOUT_REQUESTING,
});

export const authLogoutFulfilled = () => ({
  type: types.AUTH_LOGOUT_FULFILLED
});

export const authLogoutRejected = () => ({
  type: types.AUTH_LOGOUT_REJECTED,
});

export const authRegisterRequesting = () => ({
  type: types.AUTH_REGISTER_REQUESTING
});

export const authRegisterRequested = () => ({
  type: types.AUTH_REGISTER_REQUESTED
});

export const authRegisterRejected = () => ({
  type: types.AUTH_REGISTER_REJECTED
});

export const authRegisterFulfilled = () => ({
  type: types.AUTH_REGISTER_FULFILLED
});
