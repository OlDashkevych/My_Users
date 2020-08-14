import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import postsActions from './postsActions';

const initialPostsState = [];

const postsList = createReducer(initialPostsState, {
  [postsActions.getListSuccess]: (_, { payload }) => payload.data,
  [postsActions.createPostSuccess]: (state, { payload }) => [
    ...state,
    payload.data,
  ],
  [postsActions.deletePostSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
  [postsActions.updatePostSuccess]: (state, { payload }) =>
    state.map(item => {
      return item.id === payload.id ? payload : item;
    }),
});

const error = createReducer(null, {
  [postsActions.getListError]: (_, { payload }) => payload,
  [postsActions.createPostError]: (_, { payload }) => payload,
  [postsActions.updatePostError]: (_, { payload }) => payload,
  [postsActions.deletePostError]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [postsActions.createPostRequest]: () => true,
  [postsActions.getListRequest]: () => true,
  [postsActions.updatePostRequest]: () => true,
  [postsActions.deletePostRequest]: () => true,

  [postsActions.createPostError]: () => false,
  [postsActions.getListError]: () => false,
  [postsActions.updatePostError]: () => false,
  [postsActions.deletePostError]: () => false,

  [postsActions.createPostSuccess]: () => false,
  [postsActions.getListSuccess]: () => false,
  [postsActions.updatePostSuccess]: () => false,
  [postsActions.deletePostSuccess]: () => false,
});

export default combineReducers({
  postsList,
  error,
  loading,
});
