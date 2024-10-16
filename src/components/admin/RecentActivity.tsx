import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './RecentActivity.module.css';

interface Activity {
  id: number;
  description: string;
  date: string;
}

const RecentActivity: FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/admin/recent-activity'); // Adjust the URL if necessary
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching recent activities:', error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div className={styles.activityContainer}>
      <h2>Recent Activity</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <span>{activity.description}</span>
            <span>Date: {activity.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
