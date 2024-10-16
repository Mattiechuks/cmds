import React, { FC } from 'react';
import styles from './UploadButton.module.css';

interface UploadButtonProps {
  children: React.ReactNode;
}

const UploadButton: FC<UploadButtonProps> = ({ children }) => {
  return (
    <button className={styles.button}>
      {children}
    </button>
  );
};

export default UploadButton;
