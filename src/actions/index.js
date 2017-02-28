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

// export const fetchPost = (postId) => ({
//   type: 'FETCH_POST',
//   postId,
// });
// export const requestPost = () => ({
//   type: 'REQUEST_POST',
// });
// export const receivePost = (post, comments) => ({
//   type: 'RECEIVE_POST',
//   post,
//   comments,
// });
//
// export const receivePostFailed = () => ({
//   type: 'RECEIVE_POST_FAILED'
// });
//
// export const hideWarning = () => ({
//   type: 'HIDE_WARNING'
// });
