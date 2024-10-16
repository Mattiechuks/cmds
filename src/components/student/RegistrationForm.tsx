import React, { FC, useState, ChangeEvent } from 'react';
import axios from 'axios';
import Input from '../common/Input';
import SaveButton from '../common/SaveButton';
import styles from './RegistrationForm.module.css';

interface FormData {
  fullName: string;
  email: string;
  gender: string;
  age: string;
  program: string;
  level: string;
  semester: string;
  phoneNumber: string;
  photo: string;
}

const RegistrationForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    gender: '',
    age: '',
    program: '',
    level: '',
    semester: '',
    phoneNumber: '',
    photo: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, photo: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8000/api/register/', formData); // Adjust the URL if necessary
        alert('Registration successful!');
        console.log('Registration response:', response.data);
    } catch (error) {
        console.error('Error during registration:', error);
        alert('Registration failed. Please try again.');
    }
};


  return (
    <form className={styles.registrationForm} onSubmit={handleSubmit}>
      <h1>Student Registration</h1>
      <div className={styles.formGroup}>
        <label>Full Name</label>
        <Input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Email Address</label>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Age</label>
        <Input
          type="number"
          name="age"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Phone Number</label>
        <Input
          type="tel"
          name="phoneNumber"
          placeholder="Enter your phone number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Photo</label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          onChange={handlePhotoUpload}
          required
        />
        {formData.photo && <img src={formData.photo} alt="Profile Preview" className={styles.photoPreview} />}
      </div>
      <SaveButton onClick={() => {}}>Save and Continue</SaveButton>
    </form>
  );
};

export default RegistrationForm;
