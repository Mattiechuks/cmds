import React, { FC, useEffect, useState } from 'react';
import styles from './RecentlyDownloadedMaterials.module.css';
import mockData from '../../mockData/studentData.json'; // Import mock data

interface DownloadedMaterial {
  id: number;
  title: string;
  uploadedBy: string;
  date: string;
}

const RecentlyDownloadedMaterials: FC = () => {
  const [materials, setMaterials] = useState<DownloadedMaterial[]>([]);

  useEffect(() => {
    setMaterials(mockData.recentDownloads || []); // Use mock data and handle missing recentDownloads
  }, []);

  return (
    <div className={styles.downloadsContainer}>
      <h2>Recently Downloaded Materials</h2>
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

export default RecentlyDownloadedMaterials;
