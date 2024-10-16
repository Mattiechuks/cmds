import React, { FC } from 'react';
import styles from './styles/lecturer/CourseMaterialsSection.module.css';

interface CourseMaterialsSectionProps {
  title: string;
  children: React.ReactNode;
}

const CourseMaterialsSection: FC<CourseMaterialsSectionProps> = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

export default CourseMaterialsSection;
