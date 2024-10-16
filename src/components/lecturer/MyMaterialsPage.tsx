import React, { FC } from 'react';
import styles from './lecturer/MyMaterialsPage.module.css';

interface Material {
  id: number;
  icon: React.ReactNode;
  onView: () => void;
  onEdit: () => void;
}

interface MyMaterialsPageProps {
  materials: Material[];
}

const MyMaterialsPage: FC<MyMaterialsPageProps> = ({ materials }) => {
  return (
    <div className={styles.container}>
      <h2>My Materials</h2>
      <div className={styles.grid}>
        {materials.map(material => (
          <div key={material.id} className={styles.thumbnail}>
            <div className={styles.icon}>{material.icon}</div>
            <div className={styles.actions}>
              <button onClick={material.onView}>View</button>
              <button onClick={material.onEdit}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyMaterialsPage;
