import React, { FC, useState, ChangeEvent } from 'react';
import axios from 'axios';
import Input from '../common/Input';
import SaveButton from '../common/SaveButton';
import styles from './LecturerRegistrationForm.module.css';

interface FormData {
  fullName: string;
  email: string;
  gender: string;
  age: string;
  academicQualification: string;
  courseTaught: string;
  department: string;
  phoneNumber: string;
  photo: string;
}

const LecturerRegistrationForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    gender: '',
    age: '',
    academicQualification: '',
    courseTaught: '',
    department: '',
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
      <h1>Lecturer Registration</h1>
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
        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
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
        <label>Academic Qualification</label>
        <Input
          type="text"
          name="academicQualification"
          placeholder="Enter your academic qualification"
          value={formData.academicQualification}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Course Taught</label>
        <Input
          type="text"
          name="courseTaught"
          placeholder="Enter the course you teach"
          value={formData.courseTaught}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label>Department</label>
        <Input
          type="text"
          name="department"
          placeholder="Enter your department"
          value={formData.department}
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

export default LecturerRegistrationForm;
