import styles from './style.module.css'

export function Post(props) {
  return (
    <div className={styles.post}>
      <span className={styles.name}>{props.userName}</span>
      <p className={styles.message}>{props.message}</p>
    </div>
  )
}