import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './AnalyticsSection.module.css';
import mockData from '../../mockData/lecturerData.json'; // Import mock data

interface AnalyticsData {
  id: number;
  metric: string;
  value: number;
}

const AnalyticsSection: FC = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData[]>([]);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/lecturer-analytics'); // Adjust the URL if necessary
        setAnalytics(response.data);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
        // Use mock data on error
        setAnalytics(mockData.analytics);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div className={styles.analyticsContainer}>
      <h2>Analytics</h2>
      <div className={styles.analyticsGrid}>
        {analytics.map((data) => (
          <div key={data.id} className={styles.analyticsBox}>
            <h3>{data.metric}</h3>
            <p>{data.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsSection;
