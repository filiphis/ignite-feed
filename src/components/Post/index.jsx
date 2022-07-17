import styles from './style.module.css'
import userAvatar from '../../assets/images/my-avatar.png'

export function Post(props) {
  return (
    <div className={styles.post}>
      <header className={styles.header}>
        <div className={styles.user}>
          <img className={styles.userAvatar} src={userAvatar} alt="" />
          <div className={styles.userInfo}>
            <span className={styles.userName}>Luiz Silveira</span>
            <span className={styles.userOccupation}>Dev Front-End</span>
          </div>
        </div>
        <time className={styles.time} title='17 de julho as 03:15h' dateTime='2022-07-17 03:15:00'>Públicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a> {' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>

          </p>
      </div>
      <form className={styles.form}>
        <legend className={styles.form__title}>Deixe seu feedback</legend>
        <textarea className={styles.form__text} placeholder='Escreva um comentário...' />
        <div className={styles.form__buttonWrapper}>
          <button className={styles.form__button} type="submit">Publicar</button>
        </div>
      </form>
    </div>
  )
}