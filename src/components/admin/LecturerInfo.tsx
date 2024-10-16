import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import styles from './LecturerInfo.module.css';

interface Lecturer {
  id: number;
  name: string;
  recentLogin: string;
  recentUpload: string;
  courseTaught: string;
  interactions: number;
}

const LecturerInfo: FC = () => {
  const [lecturers, setLecturers] = useState<Lecturer[]>([]);

  useEffect(() => {
    axios.get('/api/lecturers')
      .then(response => setLecturers(response.data))
      .catch(error => console.error('Error fetching lecturer data:', error));
  }, []);

  return (
    <div className={styles.container}>
      <h2>Lecturer Management</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Recent Login</th>
            <th>Recent Upload</th>
            <th>Course Taught</th>
            <th>Interactions</th>
            <th>Detailed Insights</th>
          </tr>
        </thead>
        <tbody>
          {lecturers.map((lecturer) => (
            <tr key={lecturer.id}>
              <td>{lecturer.name}</td>
              <td>{lecturer.recentLogin}</td>
              <td>{lecturer.recentUpload}</td>
              <td>{lecturer.courseTaught}</td>
              <td>{lecturer.interactions}</td>
              <td><button className={styles.insightsButton}>View Insights</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LecturerInfo;
