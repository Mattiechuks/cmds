import React, { FC, useState } from 'react';
import Input from '../common/Input';
import SaveButton from '../common/SaveButton';
import styles from './Settings.module.css';

const Settings: FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [privacy, setPrivacy] = useState('public');

  const handleSave = () => {
    // Save settings to API
    console.log('Settings saved');
  };

  return (
    <div className={styles.container}>
      <h1>General Settings</h1>
      <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>
        <input type="checkbox" checked={twoFactorAuth} onChange={() => setTwoFactorAuth(!twoFactorAuth)} />
        Two Factor Authentication
      </label>
      <label>
        <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
        Email Notifications
      </label>
      <label>
        Privacy Setting
        <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      </label>
      <SaveButton onClick={handleSave}>Save</SaveButton>
    </div>
  );
};

export default Settings;
