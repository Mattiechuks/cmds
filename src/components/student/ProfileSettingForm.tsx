import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import Input from '../common/Input';
import styles from './ProfileSettingForm.module.css';
import { FaPencilAlt } from 'react-icons/fa';

interface Profile {
  fullName: string;
  email: string;
  program: string;
  level: string;
  semester: string;
  phoneNumber: string;
}

const ProfileSettingForm: FC = () => {
  const [profile, setProfile] = useState<Profile>({
    fullName: '',
    email: '',
    program: '',
    level: '',
    semester: '',
    phoneNumber: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch profile data on component mount
    axios.get('http://localhost:8000/api/profile/')
      .then(response => setProfile(response.data))
      .catch(error => console.error('Error fetching profile data:', error));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put('http://localhost:8000/api/profile/', profile);
      alert('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Profile update failed. Please try again.');
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className={styles.profileContainer}>
      <h2>Profile Setting</h2>
      <div className={styles.profileImageSection}>
        <img src="path/to/user/photo.jpg" alt="User Photo" className={styles.profileImage} /> {/* Update with user's photo */}
        <button className={styles.changeImageButton}>Change</button>
      </div>
      <div className={styles.profileForm}>
        <div className={styles.formGroup}>
          <label>Full Name</label>
          <Input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={profile.fullName}
            onChange={handleChange}
            required
          />
          <FaPencilAlt className={styles.editIcon} onClick={() => setIsEditing(true)} />
        </div>
        <div className={styles.formGroup}>
          <label>Email Address</label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={profile.email}
            onChange={handleChange}
            required
          />
          <FaPencilAlt className={styles.editIcon} onClick={() => setIsEditing(true)} />
        </div>
        <div className={styles.formGroup}>
          <label>Program</label>
          <Input
            type="text"
            name="program"
            placeholder="Enter your program"
            value={profile.program}
            onChange={handleChange}
            required
          />
          <FaPencilAlt className={styles.editIcon} onClick={() => setIsEditing(true)} />
        </div>
        <div className={styles.formGroup}>
          <label>Level</label>
          <Input
            type="text"
            name="level"
            placeholder="Enter your level"
            value={profile.level}
            onChange={handleChange}
            required
          />
          <FaPencilAlt className={styles.editIcon} onClick={() => setIsEditing(true)} />
        </div>
        <div className={styles.formGroup}>
          <label>Semester</label>
          <Input
            type="text"
            name="semester"
            placeholder="Enter your semester"
            value={profile.semester}
            onChange={handleChange}
            required
          />
          <FaPencilAlt className={styles.editIcon} onClick={() => setIsEditing(true)} />
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.saveButton} onClick={handleSave}>Save</button>
          <button className={styles.cancelButton} onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingForm;
