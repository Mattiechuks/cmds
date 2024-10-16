import React, { FC, useState, ChangeEvent } from 'react';
import axios from 'axios';
import styles from './PrivacySettings.module.css';

const PrivacySettings: FC = () => {
  const [settings, setSettings] = useState({
    publicProfile: false,
    lecturersOnly: false,
    privateProfile: true,
    dataSharing: true
  });

  const handleToggle = async (setting: string, value: boolean) => {
    try {
      await axios.put(`http://localhost:8000/api/privacy-settings/${setting}`, { value });
      alert(`${setting} updated successfully!`);
      setSettings({ ...settings, [setting]: value });
    } catch (error) {
      console.error(`Error updating ${setting}:`, error);
      alert(`Failed to update ${setting}. Please try again.`);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    handleToggle(name, checked);
  };

  return (
    <div className={styles.settingsContainer}>
      <h2>Privacy Settings</h2>
      <div className={styles.settingItem}>
        <label>Public Profile</label>
        <label className={styles.switch}>
          <input
            type="checkbox"
            name="publicProfile"
            checked={settings.publicProfile}
            onChange={handleChange}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div className={styles.settingItem}>
        <label>Lecturers Only</label>
        <label className={styles.switch}>
          <input
            type="checkbox"
            name="lecturersOnly"
            checked={settings.lecturersOnly}
            onChange={handleChange}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div className={styles.settingItem}>
        <label>Private Profile</label>
        <label className={styles.switch}>
          <input
            type="checkbox"
            name="privateProfile"
            checked={settings.privateProfile}
            onChange={handleChange}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div className={styles.settingItem}>
        <label>Data Sharing</label>
        <label className={styles.switch}>
          <input
            type="checkbox"
            name="dataSharing"
            checked={settings.dataSharing}
            onChange={handleChange}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
};

export default PrivacySettings;
