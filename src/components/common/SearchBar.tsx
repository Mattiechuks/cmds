import React, { FC } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      className={styles.searchBar}
      placeholder="Search..."
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
