import React, { FC } from 'react';
import styles from './FilterButton.module.css';

interface FilterButtonProps {
  onClick: () => void;
}

const FilterButton: FC<FilterButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.filterButton} onClick={onClick}>
      Filter
    </button>
  );
};

export default FilterButton;
