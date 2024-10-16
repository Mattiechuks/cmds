import React, { FC, useEffect, useState } from 'react';
import styles from './CourseMaterials.module.css';
import axios from 'axios';

interface Material {
  id: number;
  title: string;
  uploadedBy: string;
  date: string;
}

const CourseMaterials: FC = () => {
  const [materials, setMaterials] = useState<Material[]>([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/course-materials'); // Adjust the URL if necessary
        setMaterials(response.data);
      } catch (error) {
        console.error('Error fetching course materials:', error);
      }
    };

    fetchMaterials();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Course Materials</h1>
      <ul>
        {materials.map((material) => (
          <li key={material.id}>
            <span>{material.title}</span>
            <span>Uploaded by: {material.uploadedBy}</span>
            <span>Date: {material.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseMaterials;
