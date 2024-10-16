import React, { FC } from 'react';
import DecorativeCircles from '../components/common/DecorativeCircles';
import AdminLoginForm from '../components/admin/AdminLoginForm';
import styles from './AdminLoginPage.module.css';

const AdminLoginPage: FC = () => {
  return (
    <div className={styles.loginPage}>
      <DecorativeCircles />
      <AdminLoginForm />
    </div>
  );
};

export default AdminLoginPage;
