import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import Input from '../common/Input';
import styles from './LoginForm.module.css';

const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLecturer, setIsLecturer] = useState(false);

  const handleToggle = () => {
    setIsLecturer(!isLecturer);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login/', {
        username: email,
        password,
      });
      alert('Login successful!');
      console.log('Login response:', response.data);
      // Save tokens or redirect as needed
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <h1>Welcome to the Course Material Distribution System (CMDS)!</h1>
      <div className={styles.toggleContainer}>
        <label className={styles.toggleLabel}>
          <input type="checkbox" checked={isLecturer} onChange={handleToggle} />
          <span className={styles.toggleSlider}></span>
          {isLecturer ? 'Lecturer' : 'Student'}
        </label>
      </div>
      <div className={styles.formGroup}>
        <label>Email Address</label>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
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
      <div className={styles.links}>
        <a href="/forgot-password" className={styles.link}>Forgot Password?</a>
      </div>
      <button type="submit" className={styles.loginButton}>Login</button>
      <div className={styles.signup}>
        Don't have an account? <a href={isLecturer ? "/lecturer-registration" : "/student-registration"} className={styles.link}>Sign up</a>
      </div>
    </form>
  );
};

export default LoginForm;
