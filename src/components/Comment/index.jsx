import styles from './style.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from '../Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    event.preventDefault();
    onDeleteComment(content);
  }

  function handleLikeCountClick() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>

      <div className={styles.comment__imageBox}>
        <Avatar src="https://avatars.githubusercontent.com/u/13370451?v=4" hasBorder={false} />
      </div>

      <div className={styles.comment__box}>
        <div className={styles.comment__content}>
          <header className={styles.comment__header}>
            <div className={styles.comment__userInfo}>
              <span className={styles.comment__userName}>Luiz Silveira</span>
              <time className={styles.time} title='17 de julho as 03:15h' dateTime='2022-07-17 03:15:00'>Comentou há 1h</time>
            </div>
            <button 
              onClick={ handleDeleteComment }
              className={styles.comment__trash}
            >
              <Trash size={24} className={styles.comment__trashIcon} />
            </button>
          </header>

          <p className={styles.comment__message}>{content}</p>
        </div>
        


        <footer className={styles.comment__footer}>
          <button 
            onClick={handleLikeCountClick}
            className={styles.comment__likeButton}
          >
            <ThumbsUp size={20} />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>

      </div>





    </div>
  )
}