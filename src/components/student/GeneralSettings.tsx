import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import styles from './GeneralSettings.module.css';

const GeneralSettings: FC = () => {
  const [settings, setSettings] = useState({
    email: '',
    username: ''
  });

  useEffect(() => {
    // Fetch general settings data on component mount
    axios.get('http://localhost:8000/api/general-settings')
      .then(response => setSettings(response.data))
      .catch(error => console.error('Error fetching general settings:', error));
  }, []);

  return (
    <div className={styles.settingsContainer}>
      <h2>General Settings</h2>
      <div className={styles.settingItem}>
        <label>Email Preference</label>
        <input type="text" value={settings.email} readOnly />
      </div>
      <div className={styles.settingItem}>
        <label>Username Preference</label>
        <input type="text" value={settings.username} readOnly />
      </div>
    </div>
  );
};

export default GeneralSettings;
