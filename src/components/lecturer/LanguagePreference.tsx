import React, { FC, useState } from 'react';
import axios from 'axios';
import styles from './LanguagePreference.module.css';

const LanguagePreference: FC = () => {
  const [language, setLanguage] = useState('english');

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value;
    try {
      await axios.put('http://localhost:8000/api/language-preference', { language: newLanguage });
      setLanguage(newLanguage);
      alert('Language preference updated successfully!');
    } catch (error) {
      console.error('Error updating language preference:', error);
      alert('Failed to update language preference. Please try again.');
    }
  };

  return (
    <div className={styles.settingsContainer}>
      <h2>Language Preference</h2>
      <div className={styles.settingItem}>
        <label>Select Language</label>
        <select
          name="language"
          value={language}
          onChange={handleChange}
          className={styles.languageSelect}
        >
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="spanish">Spanish</option>
          <option value="german">German</option>
          <option value="chinese">Chinese</option>
        </select>
      </div>
    </div>
  );
};

export default LanguagePreference;
