import * as types from './actionTypes';

export const getPosts = () => ({
  type: types.GET_POST_REQUESTING
});


export const getPostRequested = () => ({
  type: types.GET_POST_REQUESTED
});

export const getPostRejected = () => ({
  type: types.GET_POST_REJECTED
});

export const getPostFulfilled = (posts) => ({
  type: types.GET_POST_FULFILLED,
  posts
});

export const hideWarning = () => ({
  type: types.HIDE_WARNING
});

export const getPostAddedAction = (post) => ({
  type: types.GET_POST_ADDED_ACTION,
  post
});

export const watchGuestAddedEvent = () => {
  type: types.WATCH_GUEST_ADDED_EVENT
};
