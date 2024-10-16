import React from 'react';
import Sidebar from '../../components/common/Sidebar';
import SidebarItem from '../../components/common/SidebarItem';
import ProfileIcon from '../../components/common/ProfileIcon';
import CourseMaterialsSlider from '../../components/student/CourseMaterialsSlider';
import CommentsSection from '../../components/student/CommentsSection';
import DownloadHistory from '../../components/student/DownloadHistory';
import NotificationsSection from '../../components/student/NotificationsSection';
import styles from './StudentDashboard.module.css';

const StudentDashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar>
        <ProfileIcon src="path/to/user/photo.jpg" alt="User Photo" /> {/* Update with user's photo */}
        <SidebarItem href="/student-dashboard"><span className={styles.clicked}>Dashboard</span></SidebarItem>
        <SidebarItem href="/student-dashboard/my-course">My Course</SidebarItem>
        <SidebarItem href="/student-dashboard/comments">Comments</SidebarItem>
        <SidebarItem href="/student-dashboard/downloads">Downloads</SidebarItem>
        <SidebarItem href="/student-dashboard/profile-setting">Profile Setting</SidebarItem>
        <SidebarItem href="/student-dashboard/settings">Settings</SidebarItem>
        <SidebarItem href="/login">Log Out</SidebarItem>
      </Sidebar>
      <div className={styles.mainContent}>
        <CourseMaterialsSlider />
        <CommentsSection />
        <DownloadHistory />
        <NotificationsSection />
      </div>
    </div>
  );
};

export default StudentDashboard;
