import React from 'react';
import Sidebar from '../../components/common/Sidebar';
import SidebarItem from '../../components/common/SidebarItem';
import ProfileIcon from '../../components/common/ProfileIcon';
import ProfileSettingForm from '../../components/student/ProfileSettingForm';
import styles from './ProfileSettingPage.module.css';

const ProfileSettingPage = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar>
        <ProfileIcon src="path/to/user/photo.jpg" alt="User Photo" /> {/* Update with user's photo */}
        <SidebarItem href="/student-dashboard">Dashboard</SidebarItem>
        <SidebarItem href="/student-dashboard/my-course">My Course</SidebarItem>
        <SidebarItem href="/student-dashboard/comments">Comments</SidebarItem>
        <SidebarItem href="/student-dashboard/downloads">Downloads</SidebarItem>
        <SidebarItem href="/student-dashboard/profile-setting"><span className={styles.clicked}>Profile Setting</span></SidebarItem>
        <SidebarItem href="/student-dashboard/settings">Settings</SidebarItem>
        <SidebarItem href="/login">Log Out</SidebarItem>
      </Sidebar>
      <div className={styles.mainContent}>
        <div className={styles.topBar}>
          <div className={styles.searchIcon}>
            <i className="fa fa-search"></i>
          </div>
        </div>
        <ProfileSettingForm />
      </div>
    </div>
  );
};

export default ProfileSettingPage;
