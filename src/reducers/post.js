import * as types from '../actions/actionTypes';

const initialState = {
  requested: false,
  posts: [],
  warningVisibility: false
};

export default function post(state = initialState, action) {

	switch(action.type) {
    case types.GET_POST_REQUESTED:
      return {
        ...state,
        requested: true
      };
    case types.GET_POST_FULFILLED:
      return {
        ...state,
        requested: false,
        posts: [...Object.keys(action.posts).map(k => action.posts[k])]
      };
    case types.GET_POST_REJECTED:
      return {
        ...state,
        requested: false,
        warningVisibility: true
      }
    case types.HIDE_WARNING:
      return {
        ...state,
        warningVisibility: false
      }
		default:
			return state;
	}
}
