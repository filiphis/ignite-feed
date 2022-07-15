import styles from './style.module.css';
import { PencilLine } from 'phosphor-react';
import myAvatarImage from '../../assets/images/my-avatar.png';
import asideBgImage from '../../assets/images/flowers-bg.png';

export function Aside() {
  return (
    <aside className={styles.aside}>
      <div className={styles.aside__wrapperBgImage}>
        <img className={styles.bgImage} src={asideBgImage} alt="" />
      </div>

      <div className={styles.aside__content}>
        <img
          className={styles.myAvatarImage}
          src={myAvatarImage}
          alt="Foto de perfil"
        />
        <p className={styles.userName}>Luiz Silveira</p>
        <p className={styles.userOccupation}>Dev Front-end</p>
      </div>

      <div className={styles.aside__buttonWrapper}>
        <a className={styles.aside__button} href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </div>
    </aside>
  );
}
