import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './CurrentCourseMaterials.module.css';

interface CourseMaterial {
  id: number;
  title: string;
  date: string;
}

const CurrentCourseMaterials: FC = () => {
  const [materials, setMaterials] = useState<CourseMaterial[]>([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/current-course-materials'); // Adjust the URL if necessary
        setMaterials(response.data);
      } catch (error) {
        console.error('Error fetching course materials:', error);
      }
    };

    fetchMaterials();
  }, []);

  return (
    <div className={styles.materialsContainer}>
      <h2>Current Course Materials</h2>
      <div className={styles.materialsGrid}>
        {materials.map((material) => (
          <div key={material.id} className={styles.materialBox}>
            <h3>{material.title}</h3>
            <p>Date: {material.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentCourseMaterials;
