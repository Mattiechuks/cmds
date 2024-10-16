import React, { FC } from 'react';
import styles from './SidebarItem.module.css';

interface SidebarItemProps {
  children: React.ReactNode;
  href: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ children, href }) => {
  return (
    <a href={href} className={styles.sidebarItem}>
      {children}
    </a>
  );
};

export default SidebarItem;
