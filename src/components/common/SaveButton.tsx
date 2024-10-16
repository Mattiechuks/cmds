import React, { FC } from 'react';
import styles from './SaveButton.module.css';

interface SaveButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const SaveButton: FC<SaveButtonProps> = ({ onClick, children }) => (
  <button className={styles.saveButton} type="button" onClick={onClick}>
    {children}
  </button>
);

export default SaveButton;
