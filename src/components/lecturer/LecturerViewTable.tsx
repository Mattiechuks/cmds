import React, { FC, useEffect, useState } from 'react';
import styles from './LecturerViewTable.module.css';
import axios from 'axios';

interface Lecturer {
  id: number;
  name: string;
  recentLogin: string;
  dateUploaded: string;
  course: string;
  studentsEnrolled: number;
}

const LecturerViewTable: FC = () => {
  const [lecturers, setLecturers] = useState<Lecturer[]>([]);

  useEffect(() => {
    const fetchLecturers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/lecturers'); // Adjust the URL if necessary
        setLecturers(response.data);
      } catch (error) {
        console.error('Error fetching lecturers:', error);
      }
    };

    fetchLecturers();
  }, []);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Recent Login</th>
          <th>Date Uploaded</th>
          <th>Course Taught (Students Enrolled)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {lecturers.map((lecturer) => (
          <tr key={lecturer.id}>
            <td>{lecturer.name}</td>
            <td>{lecturer.recentLogin}</td>
            <td>{lecturer.dateUploaded}</td>
            <td>{lecturer.course} ({lecturer.studentsEnrolled} students)</td>
            <td>
              <button className={styles.viewButton}>View</button>
              <button className={styles.editButton}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LecturerViewTable;
