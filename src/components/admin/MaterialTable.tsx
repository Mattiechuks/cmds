import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import styles from './MaterialTable.module.css';

interface Material {
  id: number;
  title: string;
  course: string;
  uploader: string;
  dateUploaded: string;
  status: string;
}

const MaterialTable: FC = () => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('/api/materials')
      .then(response => setMaterials(response.data))
      .catch(error => console.error('Error fetching materials:', error));
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredMaterials = materials.filter(material =>
    material.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Course</th>
            <th>Uploader</th>
            <th>Date Uploaded</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredMaterials.map(material => (
            <tr key={material.id}>
              <td>{material.title}</td>
              <td>{material.course}</td>
              <td>{material.uploader}</td>
              <td>{material.dateUploaded}</td>
              <td>{material.status}</td>
              <td>
                <button className={styles.actionButton}>Material {material.id}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaterialTable;
