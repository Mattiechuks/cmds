import React, { FC, useState } from 'react';
import axios from 'axios';
import styles from './Settings.module.css';

interface SettingsProps {
  settings: {
    siteTitle: string;
    adminEmail: string;
    notifications: boolean;
  };
  onSave: (updatedSettings: any) => void;
}

const Settings: FC<SettingsProps> = ({ settings, onSave }) => {
  const [formSettings, setFormSettings] = useState(settings);
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormSettings({
      ...formSettings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/settings', formSettings);
      onSave(response.data);
      setMessage('Settings updated successfully!');
    } catch (error) {
      setMessage('Failed to update settings.');
      console.error('Error updating settings:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label>Site Title</label>
        <input
          type="text"
          name="siteTitle"
          value={formSettings.siteTitle}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Admin Email</label>
        <input
          type="email"
          name="adminEmail"
          value={formSettings.adminEmail}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <label>Notifications</label>
        <input
          type="checkbox"
          name="notifications"
          checked={formSettings.notifications}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className={styles.button}>Save</button>
      {message && <p className={styles.message}>{message}</p>}
    </form>
  );
};

export default Settings;
