import { delay } from 'redux-saga';
import { call, put, takeEvery, fork } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actions/actionTypes';
import database from '../database/database';

function* requestPost(action){
  try{
    yield put(actions.getPostRequested());
    // const [ posts ] = yield [
    //   call(service.getPost)
    // ];
    let posts = null;
    yield database.ref('posts').once('value', snap => {
        posts = snap.val();
      })
    yield put(actions.getPostFulfilled(posts));
  } catch(e){
    yield put(actions.getPostRejected());
  }
}

function* watchRequestPost(){
  yield takeEvery(types.GET_POST_REQUESTING, requestPost);
}

function* showWarning(action){
  yield delay(1500);
  yield put(actions.hideWarning());
}

function* watchGetPostRejected(){
  yield takeEvery(types.GET_POST_REJECTED, showWarning);
}

export default function* postSaga(){
  yield fork(watchRequestPost);
  yield fork(watchGetPostRejected);
}
