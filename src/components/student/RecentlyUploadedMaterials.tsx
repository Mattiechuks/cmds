import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './RecentlyUploadedMaterials.module.css';

interface RecentlyUploadedMaterial {
  id: number;
  title: string;
  date: string;
}

const RecentlyUploadedMaterials: FC = () => {
  const [materials, setMaterials] = useState<RecentlyUploadedMaterial[]>([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/recent-uploads'); // Adjust the URL if necessary
        setMaterials(response.data);
      } catch (error) {
        console.error('Error fetching recently uploaded materials:', error);
      }
    };

    fetchMaterials();
  }, []);

  return (
    <div className={styles.materialsContainer}>
      <h2>Recently Uploaded Materials</h2>
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

export default RecentlyUploadedMaterials;
