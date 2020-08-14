import React from 'react';
import './Pagination.css';
import { IPaginationProps } from '../../interfaces';

const Pagination: React.FC<IPaginationProps> = ({
  postsPerPage,
  totalPosts,
  paginate,
}) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button
              type="button"
              onClick={() => paginate(number)}
              className="page-link"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
