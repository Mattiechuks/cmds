import React from 'react';
import Sidebar from '../../components/common/Sidebar';
import SidebarItem from '../../components/common/SidebarItem';
import ProfileIcon from '../../components/common/ProfileIcon';
import CommentsViewSection from '../../components/student/CommentsViewSection';
import styles from './CommentsPage.module.css';

const CommentsPage = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar>
        <ProfileIcon src="path/to/user/photo.jpg" alt="User Photo" /> {/* Update with user's photo */}
        <SidebarItem href="/student-dashboard">Dashboard</SidebarItem>
        <SidebarItem href="/student-dashboard/my-course">My Course</SidebarItem>
        <SidebarItem href="/student-dashboard/comments" ><span className={styles.clicked}>Comments</span></SidebarItem>
        <SidebarItem href="/student-dashboard/downloads">Downloads</SidebarItem>
        <SidebarItem href="/student-dashboard/profile-setting">Profile Setting</SidebarItem>
        <SidebarItem href="/student-dashboard/settings">Settings</SidebarItem>
        <SidebarItem href="/login">Log Out</SidebarItem>
      </Sidebar> 
      <div className={styles.mainContent}>
        <div className={styles.topBar}>
          <div className={styles.searchIcon}>
            <i className="fa fa-search"></i>
          </div>
        </div>
        <CommentsViewSection />
      </div>
    </div>
  );
};

export default CommentsPage;
