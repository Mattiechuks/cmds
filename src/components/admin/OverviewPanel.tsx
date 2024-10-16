import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './OverviewPanel.module.css';

interface OverviewData {
  totalStudents: number;
  totalLecturers: number;
  totalMaterials: number;
  totalInteractions: number;
}

const OverviewPanel: FC = () => {
  const [overview, setOverview] = useState<OverviewData>({
    totalStudents: 0,
    totalLecturers: 0,
    totalMaterials: 0,
    totalInteractions: 0,
  });

  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/admin/overview'); // Adjust the URL if necessary
        setOverview(response.data);
      } catch (error) {
        console.error('Error fetching overview data:', error);
      }
    };

    fetchOverviewData();
  }, []);

  return (
    <div className={styles.overviewContainer}>
      <h2>Overview</h2>
      <div className={styles.overviewItem}>
        <h3>Total Students</h3>
        <p>{overview.totalStudents}</p>
      </div>
      <div className={styles.overviewItem}>
        <h3>Total Lecturers</h3>
        <p>{overview.totalLecturers}</p>
      </div>
      <div className={styles.overviewItem}>
        <h3>Total Materials</h3>
        <p>{overview.totalMaterials}</p>
      </div>
      <div className={styles.overviewItem}>
        <h3>Total Interactions</h3>
        <p>{overview.totalInteractions}</p>
      </div>
    </div>
  );
};

export default OverviewPanel;
