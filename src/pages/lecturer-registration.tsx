import React from 'react';
import DecorativeCircles from '../components/common/DecorativeCircles';
import RegistrationForm from '../components/lecturer/LecturerRegistrationForm';
import styles from './LecturerRegistrationPage.module.css';

const LecturerRegistrationPage = () => {
  return (
    <div className={styles.registrationPage}>
      <DecorativeCircles />
      <RegistrationForm />
    </div>
  );
};

export default LecturerRegistrationPage;
