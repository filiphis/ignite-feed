import styles from './style.module.css';
import avatarImage from '../../assets/images/my-avatar.png'
import { Trash, ThumbsUp } from 'phosphor-react';

export function Comment() {
  return (
    <div className={styles.comment}>


      <div className={styles.comment__imageBox}>
        <img className={styles.comment__avatar} src={avatarImage} alt="User avatar" />
      </div>

      <div className={styles.comment__box}>
        <div className={styles.comment__content}>
          <header className={styles.comment__header}>
            <div className={styles.comment__userInfo}>
              <span className={styles.comment__userName}>Luiz Silveira</span>
              <time className={styles.time} title='17 de julho as 03:15h' dateTime='2022-07-17 03:15:00'>Comentou há 1h</time>
            </div>
            <Trash size={24} className={styles.comment__trashIcon} />
          </header>

          <p className={styles.comment__message}>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        


        <footer className={styles.comment__footer}>
          <button className={styles.comment__likeButton}>
            <ThumbsUp size={20} />
            Aplaudir
            <span>06</span>
          </button>
        </footer>

      </div>





    </div>
  )
}