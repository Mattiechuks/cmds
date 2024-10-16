import React, { FC, useState } from 'react';
import styles from './AccountSettings.module.css';
import axios from 'axios';

const AccountSettings: FC = () => {
  const [settings, setSettings] = useState({
    twoFactorAuth: false,
  });

  const handleToggle = async (setting: string, value: boolean) => {
    try {
      await axios.put(`http://localhost:8000/api/account-settings/${setting}`, { value });
      alert(`${setting} updated successfully!`);
      setSettings({ ...settings, [setting]: value });
    } catch (error) {
      console.error(`Error updating ${setting}:`, error);
      alert(`Failed to update ${setting}. Please try again.`);
    }
  };

  return (
    <div className={styles.settingsContainer}>
      <h2>Account Settings</h2>
      <div className={styles.settingItem}>
        <label>Two Factor Authentication</label>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={settings.twoFactorAuth}
            onChange={() => {
              const newValue = !settings.twoFactorAuth;
              handleToggle('twoFactorAuth', newValue);
            }}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
};

export default AccountSettings;
