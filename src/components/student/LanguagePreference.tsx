import React, { FC, useState } from 'react';
import axios from 'axios';
import styles from './LanguagePreference.module.css';

const LanguagePreference: FC = () => {
  const [language, setLanguage] = useState('english');

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <label>
          <input
            type="radio"
            name="language"
            value="english"
            checked={language === 'english'}
            onChange={handleChange}
          />
          English
        </label>
        <label>
          <input
            type="radio"
            name="language"
            value="spanish"
            checked={language === 'spanish'}
            onChange={handleChange}
          />
          Spanish
        </label>
        <label>
          <input
            type="radio"
            name="language"
            value="french"
            checked={language === 'french'}
            onChange={handleChange}
          />
          French
        </label>
      </div>
    </div>
  );
};

export default LanguagePreference;
