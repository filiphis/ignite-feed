import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from '../Comment';
import { Avatar } from '../Avatar/index';
import styles from './style.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface iComment {
  type: 'paragraph' | 'link';
  text: string;
}

interface User {
  name: string;
  avatar: string;
  occupation: string;
  contents: iComment[];
}

interface PostProps {
  user: User;
  tags: string[];
  publishedAt: Date;
}

export function Post({ user, tags, publishedAt }: PostProps) {
  

  const [commentText, setCommentText] = useState('');
  const [comments, setComments ] = useState<string[]>([]);

  const publishedAtToString = publishedAt.toISOString()

  const publishedDateTimeFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateTimeRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCommentSubmit(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, commentText]);
    setCommentText('');
  }

  function handleCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setCommentText(event.target.value);
  }


  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedComment = comments.filter(comment => comment !== commentToDelete);
    setComments(commentsWithoutDeletedComment);
  }

  let count = 0;

  function handleCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    if (event.target.validity.valueMissing === true) {
      event.target.setCustomValidity('Digite um comentario!')
    }
  }

  const commentIsInvalid = commentText.length === 0;


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
        <time className={styles.time} title={publishedDateTimeFormatted} dateTime={publishedAtToString}>{publishedDateTimeRelativeToNow}</time>
      </header>


      <div className={styles.content}>

        {user.contents.map(content => (
          content.type === 'paragraph' ? <p key={count++}>{content.text}</p> : <p key={count++}><a href='#'>{content.text}</a></p>
        ))}

        <p>{tags ? tags.map(tag => <a key={count++} href='#'> {tag} </a>) : ''}</p>

      </div>



      <form 
        onSubmit={handleCommentSubmit}
        className={styles.form}
      >
        <legend className={styles.form__title}>Deixe seu feedback</legend>
        <textarea 
          onChange={handleCommentChange}
          onInvalid={handleCommentInvalid}
          value={commentText}
          className={styles.form__text}
          required
          placeholder='Escreva um comentário...'
        />
        <div className={styles.form__buttonWrapper}>
          <button 
            disabled={commentIsInvalid}
            className={styles.form__button} 
            type="submit">
            Publicar
          </button>
        </div>
      </form>

      <div className={styles.commentsList}>
        {
          comments.map(comment => (
            <Comment 
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}

            />
          ))
        }
        
      </div>
    </div>
  )
}