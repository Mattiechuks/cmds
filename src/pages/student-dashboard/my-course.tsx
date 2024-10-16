import React from 'react';
import Sidebar from '../../components/common/Sidebar';
import SidebarItem from '../../components/common/SidebarItem';
import ProfileIcon from '../../components/common/ProfileIcon';
import CurrentCourseMaterials from '../../components/student/CurrentCourseMaterials';
import RecentlyUploadedMaterials from '../../components/student/RecentlyUploadedMaterials';
import styles from './MyCourse.module.css';

const MyCourse = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar>
        <ProfileIcon src="path/to/user/photo.jpg" alt="User Photo" />
        <SidebarItem href="/student-dashboard">Dashboard</SidebarItem>
        <SidebarItem href="/student-dashboard/my-course"><span className={styles.clicked}>My Course</span></SidebarItem>
        <SidebarItem href="/student-dashboard/comments">Comments</SidebarItem>
        <SidebarItem href="/student-dashboard/downloads">Downloads</SidebarItem>
        <SidebarItem href="/student-dashboard/profile-setting">Profile Setting</SidebarItem>
        <SidebarItem href="/student-dashboard/settings">Settings</SidebarItem>
        <SidebarItem href="/login">Log Out</SidebarItem>
      </Sidebar>
      <div className={styles.mainContent}>
        <h1>My Course</h1>
        <CurrentCourseMaterials />
        <RecentlyUploadedMaterials />
      </div>
    </div>
  );
};

export default MyCourse;
