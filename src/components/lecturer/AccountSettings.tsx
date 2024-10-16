import React, { FC, useState } from 'react';
import styles from './AccountSettings.module.css';

const AccountSettings: FC = () => {
  const [username, setUsername] = useState('lecturer_username');
  const [email, setEmail] = useState('lecturer@example.com');
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleToggle = () => {
    setTwoFactorAuth(!twoFactorAuth);
  };

  return (
    <div className={styles.settingsContainer}>
      <h2>Account Settings</h2>
      <div className={styles.settingItem}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className={styles.settingItem}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className={styles.settingItem}>
        <label>Two-Factor Authentication</label>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={twoFactorAuth}
            onChange={handleToggle}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
};

export default AccountSettings;
