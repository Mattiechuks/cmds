import React, { FC, ReactNode } from 'react';
import styles from './DashboardSection.module.css';

interface DashboardSectionProps {
  children: ReactNode;
  title: string;
}

const DashboardSection: FC<DashboardSectionProps> = ({ children, title }) => {
  return (
    <div className={styles.dashboardSection}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

export default DashboardSection;
