import React from 'react';
import styles from './DecorativeCircles.module.css';

const DecorativeCircles: React.FC = () => {
  return (
    <div className={styles.circlesContainer}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
    </div>
  );
};

export default DecorativeCircles;
