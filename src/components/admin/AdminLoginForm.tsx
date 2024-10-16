import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Input from '../common/Input';
import styles from './AdminLoginForm.module.css';

const AdminLoginForm: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('admin');
  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'confirmPassword') {
      setConfirmPassword(value);
    } else if (name === 'userType') {
      setUserType(value);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
    } else {
      try {
        const response = await axios.post('/api/auth/register', {
          name: username,
          email: username,
          password,
          role: userType,
        });
        alert('Admin login successful!');
        console.log('Registration response:', response.data);
      } catch (err) {
        setError('Registration failed! Please try again.');
        console.error('Error during registration:', err);
      }
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <h1>Admin Login</h1>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.formGroup}>
        <label>Username/Email Address</label>
        <Input
          type="text"
          name="username"
          placeholder="Enter your username or email"
          value={username}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Password</label>
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Confirm Password</label>
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>User Type</label>
        <select name="userType" value={userType} onChange={handleChange} className={styles.selectInput}>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit" className={styles.loginButton}>Sign in</button>
    </form>
  );
};

export default AdminLoginForm;
