import styles from '../styles/components/Profile.module.css';
import Icon from '@mdi/react';
import { mdiArrowUpBold } from '@mdi/js';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/higorrebell0.png" alt="Higor Rebello" />
      <div>
        <strong>Higor Rebello</strong>
        <p>
          <Icon path={mdiArrowUpBold} title="Level" size={1} color="green" />
          Level 1
        </p>
      </div>
    </div>
  );
}