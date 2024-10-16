import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '@/components/common/Sidebar';
import SidebarItem from '@/components/common/SidebarItem';
import ProfileIcon from '@/components/common/ProfileIcon';
import StudentManagement from '@/components/admin/StudentManagement';
import LecturerManagement from '@/components/admin/LecturerManagement';
import TopRightIcons from '@/components/common/TopRightIcons';
import styles from '@/UserManagement.module.css';

const UserManagement: FC = () => {
  const [activeView, setActiveView] = useState('students');
  const [profile, setProfile] = useState({ name: '', profilePicture: '' });

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
        <SidebarItem href="/admin-dashboard/user-management"><span className={styles.clicked}>User Management</span></SidebarItem>
        <div className={styles.subMenu}>
          <span
            className={`${styles.subMenuItem} ${activeView === 'students' ? styles.active : ''}`}
            onClick={() => setActiveView('students')}
          >
            Students
          </span>
          <span
            className={`${styles.subMenuItem} ${activeView === 'lecturers' ? styles.active : ''}`}
            onClick={() => setActiveView('lecturers')}
          >
            Lecturers
          </span>
        </div>
        <SidebarItem href="/admin-dashboard/material-management">Material Management</SidebarItem>
        <SidebarItem href="/admin-dashboard/reports">Reports & Statistics</SidebarItem>
        <SidebarItem href="/admin-dashboard/switch-views">Switch Views</SidebarItem>
        <SidebarItem href="/admin-dashboard/settings">Settings</SidebarItem>
        <SidebarItem href="/login">Log Out</SidebarItem>
      </Sidebar>
      <div className={styles.mainContent}>
        <div className={styles.topBar}>
          <TopRightIcons />
        </div>
        <h1>USER MANAGEMENT</h1>
        {activeView === 'students' ? <StudentManagement /> : <LecturerManagement />}
      </div>
    </div>
  );
};

export default UserManagement;
