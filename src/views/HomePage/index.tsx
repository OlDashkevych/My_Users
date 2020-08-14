import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postsOperations } from '../../redux/posts';
import PostForm from '../../components/PostForm';
import PostList from '../../components/PostList';

const HomeView: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(postsOperations.getList()), [dispatch]);

  return (
    <>
      <PostForm />
      <PostList />
    </>
  );
};

export default HomeView;
