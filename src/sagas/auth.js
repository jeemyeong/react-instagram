import { firebaseAuth, database } from '../database/database'
import { put, takeEvery, fork } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import * as actions from '../actions/auth';
import * as types from '../actions/actionTypes';

function* register(action){
  try{
    yield put(actions.authRegisterRequested());
    const user = yield firebaseAuth().createUserWithEmailAndPassword(action.email, action.pw)
    yield saveUser(user)
    yield put(actions.authRegisterFulfilled(`Welcome, ${action.email}`));
  } catch(e){
    yield put(actions.authRegisterRejected(e.message));
  }
}

function* showMessage(){
  yield delay(1500);
  yield put(actions.hideAuthMessage());
}

function* watchShowMessage(){
  yield takeEvery(types.AUTH_REGISTER_REJECTED, showMessage);
  yield takeEvery(types.AUTH_REGISTER_FULFILLED, showMessage);
  yield takeEvery(types.AUTH_LOGIN_FULFILLED, showMessage);
  yield takeEvery(types.AUTH_LOGOUT_FULFILLED, showMessage);
}

function saveUser (user) {
  return database.ref().child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}

function* watchRegister(){
  yield takeEvery(types.AUTH_REGISTER_REQUESTING, register);
}

function* logout () {
  try{
    yield put(actions.authLogoutRequested());
    yield firebaseAuth().signOut();
    yield put(actions.authLogoutFulfilled("Goodbye"));
  } catch(e){
    yield put(actions.authLogoutRejected());
  }
}

function* watchLogout(){
  yield takeEvery(types.AUTH_LOGOUT_REQUESTING, logout);
}

function* login (action) {
  try{
    yield put(actions.authLoginRequested());
    yield firebaseAuth().signInWithEmailAndPassword(action.email, action.pw)
    yield put(actions.authLoginFulfilled(`Hello, ${action.email}`));
  } catch(e){
    yield put(actions.authLoginRejected());
  }
}

function* watchLogin(){
  yield takeEvery(types.AUTH_LOGIN_REQUESTING, login);
}


export default function* auth(){
  yield fork(watchRegister);
  yield fork(watchLogout);
  yield fork(watchLogin);
  yield fork(watchShowMessage);
}
