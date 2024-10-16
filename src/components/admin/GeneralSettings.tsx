import React, { FC, useState } from 'react';
import styles from './GeneralSettings.module.css';

const GeneralSettings: FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [timeZone, setTimeZone] = useState('UTC');

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleTimeZoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeZone(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h2>General Settings</h2>
      <div className={styles.settingItem}>
        <label>Dark Mode</label>
        <label className={styles.switch}>
          <input 
            type="checkbox" 
            checked={darkMode} 
            onChange={handleDarkModeToggle} 
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div className={styles.settingItem}>
        <label>Time Zone</label>
        <select value={timeZone} onChange={handleTimeZoneChange} className={styles.selectInput}>
          <option value="UTC">UTC</option>
          <option value="PST">PST</option>
          <option value="EST">EST</option>
          <option value="CST">CST</option>
          <option value="MST">MST</option>
        </select>
      </div>
    </div>
  );
};

export default GeneralSettings;
