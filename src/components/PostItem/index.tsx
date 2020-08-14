import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postsOperations } from '../../redux/posts';
import styles from './PostItem.module.css';
import editIcon from '../../images/icons/icons8-edit-40.png';
import closeIcon from '../../images/icons/icons8-close-window-30.png';
import deleteIcon from '../../images/icons/delete.png';
import { IPosts, IPost } from '../../interfaces';

interface IPostListItemProps {
  post: IPosts;
}

const PostListItem: React.FC<IPostListItemProps> = ({
  post: { name, surname, desc, id },
}) => {
  const [edit, setEdit] = useState<boolean>(false);

  const dispatch = useDispatch();

  const deletePost = () => {
    dispatch(postsOperations.deletePost(id));
  };

  const openEdit = () => {
    setEdit(true);
  };

  const closeEdit = () => {
    setEdit(false);
  };

  const [updatedData, setIupdatedData] = useState<IPost>({
    name,
    surname,
    desc,
  });

  const handleInputChange = ({
    currentTarget: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setIupdatedData({
      ...updatedData,
      [name]: value,
    });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updated = { ...updatedData, id };
    dispatch(postsOperations.updatePost(updated));
    closeEdit();
  };

  return !edit ? (
    <li className={styles.item}>
      <p className={styles.title}>{name}</p>
      <p className={styles.title}>{surname}</p>
      <p>{desc.length > 170 ? `${desc.slice(0, 170)}...` : desc}</p>
      <div className={styles.controlPanel}>
        <button
          type="button"
          className={styles.controlBtn}
          onClick={deletePost}
        >
          <img src={deleteIcon} alt="deleteIcon" />
        </button>
        <button type="button" className={styles.controlBtn} onClick={openEdit}>
          <img className={styles.editIcon} src={editIcon} alt="edit" />
        </button>
      </div>
    </li>
  ) : (
    <li className={styles.item}>
      <button type="button" className={styles.closeBtn} onClick={closeEdit}>
        <img src={closeIcon} alt="closeIcon" />
      </button>
      <form className={styles.editForm} onSubmit={handleSubmit}>
        <label htmlFor="1" className={styles.editItemLabel}>
          Name
          <input
            className={styles.edititemInput}
            type="text"
            name="name"
            value={updatedData.name}
            onChange={handleInputChange}
            autoComplete="off"
            id="1"
            required
          />
        </label>
        <label htmlFor="2" className={styles.editItemLabel}>
          Surname
          <input
            className={styles.edititemInput}
            type="text"
            name="surname"
            value={updatedData.surname}
            onChange={handleInputChange}
            autoComplete="off"
            id="2"
            required
          />
        </label>
        <label htmlFor="3" className={styles.editItemLabel}>
          Info
          <input
            className={styles.edititemInput}
            type="text"
            name="desc"
            value={updatedData.desc}
            onChange={handleInputChange}
            autoComplete="off"
            id="3"
            required
          />
        </label>

        <button type="submit" className={styles.edititemBtn}>
          Edit post
        </button>
      </form>
    </li>
  );
};

export default PostListItem;
