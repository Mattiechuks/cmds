import React, { FC } from 'react';
import { FaSearch, FaBell, FaCog } from 'react-icons/fa';
import styles from './TopRightIcons.module.css';

const TopRightIcons: FC = () => {
  return (
    <div className={styles.topRightIcons}>
      <FaSearch className={styles.icon} />
      <FaBell className={styles.icon} />
      <FaCog className={styles.icon} />
    </div>
  );
};

export default TopRightIcons;
