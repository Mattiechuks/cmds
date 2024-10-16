import React from 'react';
import DecorativeCircles from '../components/common/DecorativeCircles';
import LoginForm from '../components/auth/LoginForm';
import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
  return (
    <div className={styles.loginPage}>
      <DecorativeCircles />
      <div className={styles.logo}>Login</div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
