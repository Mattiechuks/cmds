import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './MyMaterialsGrid.module.css';
import { FaEdit, FaTrash, FaShare, FaEye } from 'react-icons/fa';

interface Material {
  id: number;
  title: string;
  date: string;
}

const MyMaterialsGrid: FC = () => {
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
    <div className={styles.materialsContainer}>
      <h1>MY MATERIALS</h1>
      <div className={styles.materialsGrid}>
        {materials.map((material) => (
          <div key={material.id} className={styles.materialBox}>
            <h3>{material.title}</h3>
            <p>Date: {material.date}</p>
            <div className={styles.actions}>
              <FaEdit className={styles.icon} />
              <FaTrash className={styles.icon} />
              <FaShare className={styles.icon} />
              <FaEye className={styles.icon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMaterialsGrid;
