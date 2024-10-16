import React, { FC, useState, ChangeEvent } from 'react';
import styles from './GeneralSettings.module.css';

const GeneralSettings: FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showEmail, setShowEmail] = useState(false);

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name === "darkMode") {
      setDarkMode(checked);
    } else if (name === "showEmail") {
      setShowEmail(checked);
    }
  };

  return (
    <div className={styles.settingsContainer}>
      <h2>General Settings</h2>
      <div className={styles.settingItem}>
        <label>Dark Mode</label>
        <label className={styles.switch}>
          <input 
            type="checkbox" 
            name="darkMode" 
            checked={darkMode} 
            onChange={handleToggle} 
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div className={styles.settingItem}>
        <label>Show Email</label>
        <label className={styles.switch}>
          <input 
            type="checkbox" 
            name="showEmail" 
            checked={showEmail} 
            onChange={handleToggle} 
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
};

export default GeneralSettings;
