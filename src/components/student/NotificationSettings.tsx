import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './NotificationsSection.module.css';

interface Notification {
  id: number;
  message: string;
  date: string;
}

const NotificationsSection: FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/notifications'); // Adjust the URL if necessary
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
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
