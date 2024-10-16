import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from './UserActivityChart.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Activity {
  uploads: number;
  downloads: number;
}

const UserActivityChart: FC = () => {
  const [activityData, setActivityData] = useState<Activity>({ uploads: 0, downloads: 0 });

  useEffect(() => {
    const fetchActivityData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/user-activity'); // Adjust the URL if necessary
        setActivityData(response.data);
      } catch (error) {
        console.error('Error fetching user activity data:', error);
      }
    };

    fetchActivityData();
  }, []);

  const data = {
    labels: ['Uploads', 'Downloads'],
    datasets: [
      {
        label: 'User Activity',
        data: [activityData.uploads, activityData.downloads],
        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
      <h2>User Activity</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default UserActivityChart;
