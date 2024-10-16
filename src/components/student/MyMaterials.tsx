import React, { FC, useEffect, useState } from 'react';
import styles from './MyMaterials.module.css';

interface Material {
  id: number;
  title: string;
  date: string;
}

const MyMaterials: FC = () => {
  const [materials, setMaterials] = useState<Material[]>([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      // Fetch materials from API and set state
      const response = await fetch('/api/student-materials'); // Replace with actual API endpoint
      const data = await response.json();
      setMaterials(data);
    };

    fetchMaterials();
  }, []);

  return (
    <div className={styles.container}>
      <h1>My Materials</h1>
      <ul>
        {materials.map((material) => (
          <li key={material.id}>
            <span>{material.title}</span>
            <span>{material.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyMaterials;
