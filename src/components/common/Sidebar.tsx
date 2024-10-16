import React, { FC, ReactNode } from 'react';
import styles from './Sidebar.module.css';

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  return (
    <div className={styles.sidebar}>
      {children}
    </div>
  );
};

export default Sidebar;
