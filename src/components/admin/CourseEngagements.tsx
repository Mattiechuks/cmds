import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CourseEngagements.module.css';

interface Engagement {
  id: number;
  name: string;
  views: number;
  downloads: number;
}

const CourseEngagements: FC = () => {
  const [studentEngagements, setStudentEngagements] = useState<Engagement[]>([]);
  const [lecturerEngagements, setLecturerEngagements] = useState<Engagement[]>([]);

  useEffect(() => {
    axios.get('/api/engagements/students')
      .then(response => setStudentEngagements(response.data))
      .catch(error => console.error('Error fetching student engagements:', error));

    axios.get('/api/engagements/lecturers')
      .then(response => setLecturerEngagements(response.data))
      .catch(error => console.error('Error fetching lecturer engagements:', error));
  }, []);

  return (
    <div className={styles.engagementsContainer}>
      <div className={styles.section}>
        <h2>Student Engagements</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Views</th>
              <th>Downloads</th>
            </tr>
          </thead>
          <tbody>
            {studentEngagements.map(engagement => (
              <tr key={engagement.id}>
                <td>{engagement.name}</td>
                <td>{engagement.views}</td>
                <td>{engagement.downloads}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.section}>
        <h2>Lecturer Engagements</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Views</th>
              <th>Uploads</th>
            </tr>
          </thead>
          <tbody>
            {lecturerEngagements.map(engagement => (
              <tr key={engagement.id}>
                <td>{engagement.name}</td>
                <td>{engagement.views}</td>
                <td>{engagement.downloads}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseEngagements;
