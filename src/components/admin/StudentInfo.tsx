import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import styles from './StudentInfo.module.css';

interface Student {
  id: number;
  name: string;
  recentLogin: string;
  coursesEnrolled: number;
  interactions: number;
}

const StudentInfo: FC = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    axios.get('/api/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching student data:', error));
  }, []);

  return (
    <div className={styles.container}>
      <h2>Student Management</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Recent Login</th>
            <th>Courses Enrolled</th>
            <th>Interactions</th>
            <th>Detailed Insights</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.recentLogin}</td>
              <td>{student.coursesEnrolled}</td>
              <td>{student.interactions}</td>
              <td><button className={styles.insightsButton}>View Insights</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentInfo;
