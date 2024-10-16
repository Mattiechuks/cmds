import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './AvailableDownloads.module.css';

interface DownloadMaterial {
  id: number;
  title: string;
  uploadedBy: string;
  date: string;
}

const AvailableDownloads: FC = () => {
  const [materials, setMaterials] = useState<DownloadMaterial[]>([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/available-downloads'); // Adjust the URL if necessary
        setMaterials(response.data);
      } catch (error) {
        console.error('Error fetching available downloads:', error);
      }
    };

    fetchMaterials();
  }, []);

  return (
    <div className={styles.downloadsContainer}>
      <h2>Course Materials Available For Download</h2>
      <div className={styles.materialsGrid}>
        {materials.map((material) => (
          <div key={material.id} className={styles.materialBox}>
            <h3>{material.title}</h3>
            <p>Uploaded by: {material.uploadedBy}</p>
            <p>Date: {material.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableDownloads;
