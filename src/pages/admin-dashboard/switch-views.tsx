import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../components/common/Sidebar';
import SidebarItem from '../../components/common/SidebarItem';
import ProfileIcon from '../../components/common/ProfileIcon';
import TopRightIcons from '../../components/common/TopRightIcons';
import LecturerInfo from '@/components/admin/LecturerInfo';
import StudentInfo from '@/components/admin/StudentInfo';
import styles from './SwitchViews.module.css';

const SwitchViews: FC = () => {
  const [view, setView] = useState('defaultView');
  const [profile, setProfile] = useState({ name: '', profilePicture: '' });

  const handleViewChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setView(e.target.value);
  };

  useEffect(() => {
    axios.get('/api/users/profile')
      .then(response => setProfile(response.data))
      .catch(error => console.error('Error fetching profile data:', error));
  }, []);

  return (
    <div className={styles.dashboard}>
      <Sidebar>
        <ProfileIcon src={profile.profilePicture} alt={`${profile.name}'s Photo`} />
        <SidebarItem href="/admin-dashboard">Dashboard</SidebarItem>
        <SidebarItem href="/admin-dashboard/user-management">User Management</SidebarItem>
        <SidebarItem href="/admin-dashboard/material-management">Material Management</SidebarItem>
        <SidebarItem href="/admin-dashboard/reports">Reports & Statistics</SidebarItem>
        <SidebarItem href="/admin-dashboard/switch-views"><span className={styles.clicked}>Switch Views</span></SidebarItem>
        <SidebarItem href="/admin-dashboard/settings">Settings</SidebarItem>
        <SidebarItem href="/login">Log Out</SidebarItem>
      </Sidebar>
      <div className={styles.mainContent}>
        <div className={styles.topBar}>
          <select onChange={handleViewChange} className={styles.dropdown}>
            <option value="StudentInfo">Student</option>
            <option value="LecturerInfo">Lecturer</option>
          </select>
          <TopRightIcons />
        </div>
        <div className={styles.viewContainer}>
          {view === 'StudentInfo' && <StudentInfo />}
          {view === 'LecturerInfo' && <LecturerInfo />}
        </div>
      </div>
    </div>
  );
};

export default SwitchViews;
