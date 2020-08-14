import axios from 'axios';
import postsActions from './postsActions';

axios.defaults.baseURL = 'http://77.120.241.80:8911/api';

const getList = () => dispatch => {
  dispatch(postsActions.getListRequest());

  axios
    .get('/users')
    .then(response => {
      dispatch(postsActions.getListSuccess(response));
    })
    .catch(error => dispatch(postsActions.getListError(error)));
};

const createPost = post => dispatch => {
  dispatch(postsActions.createPostRequest());

  axios
    .post('/users', post)
    .then(response => {
      dispatch(postsActions.createPostSuccess(response));
    })
    .catch(error => dispatch(postsActions.createPostError(error)));
};

const updatePost = updated => dispatch => {
  dispatch(postsActions.updatePostRequest());

  axios
    .put(`/user/${updated.id}`, updated)
    .then(() => dispatch(postsActions.updatePostSuccess(updated)))
    .catch(error => postsActions.updatePostError(error));
};

const deletePost = id => dispatch => {
  dispatch(postsActions.deletePostRequest());

  axios
    .delete(`/user/${id}`)
    .then(() => dispatch(postsActions.deletePostSuccess({ id })))
    .catch(error => postsActions.deletePostError(error));
};

export default {
  getList,
  createPost,
  updatePost,
  deletePost,
};
