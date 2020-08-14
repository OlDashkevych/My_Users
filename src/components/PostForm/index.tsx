import React from 'react';
import { useDispatch } from 'react-redux';
import './PostForm.css';
import useInputChange from './hooks/useInputsChange';
import { postsOperations } from '../../redux/posts';

const PostForm: React.FC = () => {
  const dispatch = useDispatch();

  const [input, handleInputChange, handleClearInput] = useInputChange();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(postsOperations.createPost(input));
    handleClearInput();
  };

  return (
    <form className="PostForm" onSubmit={handleSubmit}>
      <div className="PostForm-wrapper">
        <label htmlFor="3" className="PostForm-label">
          Name
          <input
            className="PostForm-input"
            type="text"
            name="name"
            value={input.name}
            onChange={handleInputChange}
            autoComplete="off"
            id="3"
            required
          />
        </label>
        <label htmlFor="4" className="PostForm-label">
          Surname
          <input
            className="PostForm-input"
            type="text"
            name="surname"
            value={input.surname}
            onChange={handleInputChange}
            autoComplete="off"
            id="4"
            required
          />
        </label>
      </div>
      <label htmlFor="5" className="PostForm-label PostForm-label-desc">
        Info
        <input
          className="PostForm-input"
          type="text"
          name="desc"
          value={input.desc}
          onChange={handleInputChange}
          autoComplete="off"
          id="5"
          required
        />
      </label>

      <button type="submit" className="PostForm-button">
        Add user
      </button>
    </form>
  );
};
export default PostForm;
