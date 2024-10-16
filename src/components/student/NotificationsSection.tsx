import React, { FC, useEffect, useState } from 'react';
import styles from './NotificationsSection.module.css';
import mockData from '../../mockData/studentData.json'; // Import mock data

interface Notification {
  id: number;
  message: string;
  date: string;
}

const NotificationsSection: FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    setNotifications(mockData.notifications || []); // Use mock data, handle missing notifications
  }, []);

  return (
    <div className={styles.notificationsContainer}>
      <h2>Notifications</h2>
      {notifications.map((notification) => (
        <div key={notification.id} className={styles.notificationBox}>
          <p className={styles.notificationMessage}>{notification.message}</p>
          <p className={styles.notificationDate}>{notification.date}</p>
        </div>
      ))}
    </div>
  );
};

export default NotificationsSection;
