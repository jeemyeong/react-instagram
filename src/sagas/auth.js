import { firebaseAuth, database } from '../database/database'
import { put, takeEvery, fork, take, call } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import * as types from '../actions/actionTypes';

function* register(action){
  try{
    yield put(actions.authRegisterRequested());
    yield firebaseAuth().createUserWithEmailAndPassword(action.email, action.pw)
          .then(saveUser)
    yield put(actions.authRegisterFulfilled());
  } catch(e){
    yield put(actions.getPostRejected());
  }
}

function* saveUser (user) {
  console.log(user);
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
    yield firebaseAuth().signOut();
    yield put(actions.authLogoutFulfilled());
  } catch(e){
    yield put(actions.authLogoutRejected());
  }
}

function* watchLogout(){
  yield takeEvery(types.AUTH_LOGOUT_REQUESTING, logout);
}

function* login (action) {
  try{
    yield firebaseAuth().signInWithEmailAndPassword(action.email, action.pw)
    yield put(actions.authLoginFulfilled());
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
}
