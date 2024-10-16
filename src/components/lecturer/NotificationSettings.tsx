import React, { FC, useState } from 'react';
import styles from './NotificationSettings.module.css';

const NotificationSettings: FC = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [courseNotifications, setCourseNotifications] = useState(false);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name === 'emailNotifications') {
      setEmailNotifications(checked);
    } else if (name === 'pushNotifications') {
      setPushNotifications(checked);
    } else if (name === 'courseNotifications') {
      setCourseNotifications(checked);
    }
  };

  return (
    <div className={styles.settingsContainer}>
      <h2>Notification Settings</h2>
      <div className={styles.settingItem}>
        <label>Email Notifications</label>
        <label className={styles.switch}>
          <input 
            type="checkbox" 
            name="emailNotifications" 
            checked={emailNotifications} 
            onChange={handleToggle} 
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div className={styles.settingItem}>
        <label>Push Notifications</label>
        <label className={styles.switch}>
          <input 
            type="checkbox" 
            name="pushNotifications" 
            checked={pushNotifications} 
            onChange={handleToggle} 
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div className={styles.settingItem}>
        <label>Course-Specific Notifications</label>
        <label className={styles.switch}>
          <input 
            type="checkbox" 
            name="courseNotifications" 
            checked={courseNotifications} 
            onChange={handleToggle} 
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
};

export default NotificationSettings;
