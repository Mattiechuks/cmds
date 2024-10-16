import React, { FC, useEffect, useState } from 'react';
import { fetchStudentProfiles, deleteStudentProfile } from '../../api/studentProfiles';
import styles from './StudentProfiles.module.css';

interface StudentProfile {
  id: number;
  fullname: string;
}

const StudentProfiles: FC = () => {
  const [profiles, setProfiles] = useState<StudentProfile[]>([]);

  useEffect(() => {
    const getProfiles = async () => {
      const data = await fetchStudentProfiles();
      setProfiles(data);
    };
    getProfiles();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteStudentProfile(id);
    setProfiles(profiles.filter(profile => profile.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1>Student Profiles</h1>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {profile.fullname}
            <button onClick={() => handleDelete(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentProfiles;
