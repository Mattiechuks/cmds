import React from 'react';
import DecorativeCircles from '../components/common/DecorativeCircles';
import RegistrationForm from '../components/student/RegistrationForm';
import styles from './StudentRegistrationPage.module.css';

const StudentRegistrationPage = () => {
  return (
    <div className={styles.registrationPage}>
      <DecorativeCircles />
      <RegistrationForm />
    </div>
  );
};

export default StudentRegistrationPage;
