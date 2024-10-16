import React, { FC } from 'react';
import styles from './ProfileIcon.module.css';

interface ProfileIconProps {
  src: string;
  alt: string;
}

const ProfileIcon: FC<ProfileIconProps> = ({ src, alt }) => {
  return (
    <div className={styles.profileIcon}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};

export default ProfileIcon;
