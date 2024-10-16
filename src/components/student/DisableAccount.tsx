import React, { FC, useState, ChangeEvent } from 'react';
import axios from 'axios';
import styles from './DisableAccount.module.css';

const DisableAccount: FC = () => {
  const [disableAccount, setDisableAccount] = useState('yes');

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const newDisableStatus = e.target.value;
    try {
      await axios.put('http://localhost:8000/api/disable-account', { disableAccount: newDisableStatus });
      setDisableAccount(newDisableStatus);
      alert('Account disable status updated successfully!');
    } catch (error) {
      console.error('Error updating account disable status:', error);
      alert('Failed to update account disable status. Please try again.');
    }
  };

  return (
    <div className={styles.settingsContainer}>
      <h2>Disable Account</h2>
      <div className={styles.settingItem}>
        <label>
          <input
            type="radio"
            name="disableAccount"
            value="yes"
            checked={disableAccount === 'yes'}
            onChange={handleChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="disableAccount"
            value="no"
            checked={disableAccount === 'no'}
            onChange={handleChange}
          />
          No
        </label>
      </div>
    </div>
  );
};

export default DisableAccount;
