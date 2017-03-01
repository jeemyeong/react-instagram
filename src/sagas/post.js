import { delay } from 'redux-saga';
import { put, takeEvery, fork } from 'redux-saga/effects';
import * as actions from '../actions';
import * as types from '../actions/actionTypes';
import database from '../database/database';

function* requestPost(action){
  try{
    yield put(actions.getPostRequested());
    let posts = null;
    yield database.ref('posts').once('value', snap => {
        posts = snap.val();
      })
    yield put(actions.getPostFulfilled(posts));
  } catch(e){
    yield put(actions.getPostRejected());
  }
  yield fork(watchGuestAddedEvent);

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

function* getPostAddedAction(post){
  console.log("post in other function");
  console.log(post);
  yield put(actions.getPostAddedAction(post));
}

function* watchGuestAddedEvent(){
  let post = null;
  yield database.ref('/posts').on('child_added', (snap) => {
    post = (snap.val());
    getPostAddedAction(post)
    console.log(post);
  })
  // yield put(getPostAddedAction(post));
  // yield put(actions.getPostAddedAction(post))
}

export default function* postSaga(){
  yield fork(watchRequestPost);
  yield fork(watchGetPostRejected);

}
