import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from '../Comment';
import { Avatar } from '../Avatar/index';
import styles from './style.module.css';
import { useState } from 'react';


export function Post({ user, tags, publishedAt }) {

  const [commentText, setCommentText] = useState('');
  const [comments, setComments ] = useState([]);

  const publishedDateTimeFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateTimeRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })


  function handleCommentText() {
    setCommentText(event.target.value);
  }

  function handleCommentSubmit() {
    event.preventDefault();
    setComments([...comments, commentText]);
    setCommentText('');
  }

  function deleteComment(comment) {
    console.log(`Deletando comentario ${comment}`);
  }






  return (
    <div className={styles.post}>
      <header className={styles.header}>
        <div className={styles.user}>
          <Avatar src={user.avatar} />
          <div className={styles.userInfo}>
            <span className={styles.userName}>{user.name}</span>
            <span className={styles.userOccupation}>{user.occupation}</span>
          </div>
        </div>
        <time className={styles.time} title={publishedDateTimeFormatted} dateTime={publishedAt}>{publishedDateTimeRelativeToNow}</time>
      </header>



      <div className={styles.content}>

        {user.comments.map(content => (
          content.type === 'paragraph' ? <p>{content.text}</p> : <p><a href='#'>{content.text}</a></p>
        ))}

        <p>{tags ? tags.map(tag => <a href='#'> {tag} </a>) : ''}</p>

      </div>



      <form 
        onSubmit={handleCommentSubmit}
        className={styles.form}
      >
        <legend className={styles.form__title}>Deixe seu feedback</legend>
        <textarea 
          onChange={handleCommentText}
          value={commentText}
          className={styles.form__text} 
          placeholder='Escreva um comentário...' 
        />
        <div className={styles.form__buttonWrapper}>
          <button className={styles.form__button} type="submit">Publicar</button>
        </div>
      </form>

      <div className={styles.commentsList}>
        {
          comments.map(comment => (
            <Comment 
              content={comment}
              onDeleteComment={deleteComment}
            />
          ))
        }
        
      </div>
    </div>
  )
}