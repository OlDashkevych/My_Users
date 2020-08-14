import { createAction } from '@reduxjs/toolkit';

const createPostRequest = createAction('post/createPostRequest');
const createPostSuccess = createAction('post/createPostSuccess');
const createPostError = createAction('post/createPostError');

const getListRequest = createAction('post/getListRequest');
const getListSuccess = createAction('post/getListSuccess');
const getListError = createAction('post/getListError');

const updatePostRequest = createAction('post/updatePostRequest');
const updatePostSuccess = createAction('post/updatePostSuccess');
const updatePostError = createAction('post/updatePostError');

const deletePostRequest = createAction('post/deletePostRequest');
const deletePostSuccess = createAction('post/deletePostSuccess');
const deletePostError = createAction('post/deletePostError');

export default {
  createPostRequest,
  createPostSuccess,
  createPostError,

  getListRequest,
  getListSuccess,
  getListError,

  updatePostRequest,
  updatePostSuccess,
  updatePostError,

  deletePostRequest,
  deletePostSuccess,
  deletePostError,
};
