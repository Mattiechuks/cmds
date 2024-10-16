import React, { FC, useState } from 'react';
import styles from './SecuritySettings.module.css';
import axios from 'axios';

const SecuritySettings: FC = () => {
  const [strongPassword, setStrongPassword] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);
  const [passwordExpiration, setPasswordExpiration] = useState(false);
  const [mfa, setMfa] = useState(false);
  const [emailVerification, setEmailVerification] = useState(false);
  const [smsVerification, setSmsVerification] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState(false);

  const handleToggle = async (setting: string, value: boolean) => {
    try {
      await axios.put(`http://localhost:8000/api/security-settings/${setting}`, { value });
      alert(`${setting} updated successfully!`);
    } catch (error) {
      console.error(`Error updating ${setting}:`, error);
      alert(`Failed to update ${setting}. Please try again.`);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Security Settings</h2>
      <div className={styles.settingItem}>
        <label>Enable Strong Password</label>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={strongPassword}
            onChange={() => {
              setStrongPassword(!strongPassword);
              handleToggle('strongPassword', !strongPassword);
            }}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div className={styles.settingItem}>
        <label>Password Length</label>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={passwordLength}
            onChange={() => {
              setPasswordLength(!passwordLength);
              handleToggle('passwordLength', !passwordLength);
            }}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div className={styles.settingItem}>
        <label>Password Expiration</label>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={passwordExpiration}
            onChange={() => {
              setPasswordExpiration(!passwordExpiration);
              handleToggle('passwordExpiration', !passwordExpiration);
            }}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div className={styles.settingItem}>
        <label>Enable MFA</label>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={mfa}
            onChange={() => {
              setMfa(!mfa);
              handleToggle('mfa', !mfa);
            }}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div className={styles.settingItem}>
        <label>Email Verification</label>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={emailVerification}
            onChange={() => {
              setEmailVerification(!emailVerification);
              handleToggle('emailVerification', !emailVerification);
            }}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div className={styles.settingItem}>
        <label>SMS Verification</label>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={smsVerification}
            onChange={() => {
              setSmsVerification(!smsVerification);
              handleToggle('smsVerification', !smsVerification);
            }}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
      <div className={styles.settingItem}>
        <label>Enable Session Timeout</label>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={sessionTimeout}
            onChange={() => {
              setSessionTimeout(!sessionTimeout);
              handleToggle('sessionTimeout', !sessionTimeout);
            }}
          />
          <span className={styles.slider}></span>
        </label>
      </div>
    </div>
  );
};

export default SecuritySettings;
