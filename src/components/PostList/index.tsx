import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from '../PostItem';
import { postsSelectors } from '../../redux/posts';
import styles from './PostList.module.css';
import popTransition from './transition/pop.module.css';
import Pagination from '../Pagination';
import { IPosts } from '../../interfaces';

const PostList: React.FC = () => {
  const posts: IPosts[] = useSelector(postsSelectors.getPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const reversed = [...posts].reverse();
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = reversed.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <>
      <TransitionGroup className={styles.list} component="ul">
        {currentPosts.map(post => (
          <CSSTransition key={post.id} timeout={250} classNames={popTransition}>
            <PostItem key={post.id} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </>
  );
};

export default PostList;
