import React, { FC, useState, useEffect } from 'react';
import SearchBar from '@/components/common/SearchBar';
import styles from '@/LecturerManagement.module.css';
import axios from 'axios';

interface Lecturer {
  id: number;
  name: string;
  email: string;
  lecturerId: string;
  status: string;
}

const LecturerManagement: FC = () => {
  const [lecturers, setLecturers] = useState<Lecturer[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('/api/users?role=lecturer')
    .then(response => setLecturers(response.data))
    .catch(error => console.error('Error fetching lecturers:', error));
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredLecturers = lecturers.filter(lecturer => lecturer.name.toLowerCase().includes(searchTerm.toLowerCase()));

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
            <th>Lecturer ID</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredLecturers.map(lecturer => (
            <tr key={lecturer.id}>
              <td>{lecturer.name}</td>
              <td>{lecturer.email}</td>
              <td>{lecturer.lecturerId}</td>
              <td>{lecturer.status}</td>
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

export default LecturerManagement;
