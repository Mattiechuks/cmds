import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '@/components/common/SearchBar';
import styles from '@/StudentManagement.module.css';

interface Student {
  id: number;
  name: string;
  email: string;
  studentId: string;
  status: string;
}

const StudentManagement: FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('/api/users?role=student')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <SearchBar onSearch={handleSearch} />
        <button className={styles.addButton}>Add New Users</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Student ID</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.studentId}</td>
              <td>{student.status}</td>
              <td>
                <button className={styles.actionButton}>Edit</button>
                <button className={styles.actionButton}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentManagement;
