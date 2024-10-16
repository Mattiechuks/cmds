import React, { FC } from 'react';
import styles from './HelpSupport.module.css';

const HelpSupport: FC = () => {
  return (
    <div className={styles.settingsContainer}>
      <h2>Help & Support</h2>
      <div className={styles.settingItem}>
        <label>Need help or have questions?</label>
        <button className={styles.helpButton}>Contact Support</button>
      </div>
      <div className={styles.settingItem}>
        <label>FAQ</label>
        <button className={styles.helpButton}>View FAQ</button>
      </div>
    </div>
  );
};

export default HelpSupport;
