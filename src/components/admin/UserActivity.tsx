import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './UserActivity.module.css';

interface Activity {
  id: number;
  description: string;
  date: string;
}

const UserActivity: FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/user-activities'); // Adjust the URL if necessary
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching user activities:', error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className={styles.activityContainer}>
      <h2>User Activity</h2>
      {activities.map((activity) => (
        <div key={activity.id} className={styles.activityItem}>
          <p>{activity.description}</p>
          <span>{activity.date}</span>
        </div>
      ))}
    </div>
  );
};

export default UserActivity;
