import React, { FC, useEffect, useState } from 'react';
import styles from './MyMaterials.module.css';
import axios from 'axios';

interface Material {
  id: number;
  title: string;
  uploadedBy: string;
  date: string;
}

const MyMaterials: FC = () => {
  const [materials, setMaterials] = useState<Material[]>([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/lecturer-materials'); // Adjust the URL if necessary
        setMaterials(response.data);
      } catch (error) {
        console.error('Error fetching materials:', error);
      }
    };

    fetchMaterials();
  }, []);

  return (
    <div className={styles.materials}>
      <h2>My Materials</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Uploaded By</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material) => (
            <tr key={material.id}>
              <td>{material.id}</td>
              <td>{material.title}</td>
              <td>{material.uploadedBy}</td>
              <td>{material.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyMaterials;
