import React from 'react';
import Sidebar from '../../components/common/Sidebar';
import SidebarItem from '../../components/common/SidebarItem';
import ProfileIcon from '../../components/common/ProfileIcon';
import AvailableDownloads from '../../components/student/AvailableDownloads';
import RecentlyDownloadedMaterials from '../../components/student/RecentlyDownloadedMaterials';
import styles from './DownloadsPage.module.css';

const DownloadsPage = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar>
        <ProfileIcon src="path/to/user/photo.jpg" alt="User Photo" /> {/* Update with user's photo */}
        <SidebarItem href="/student-dashboard">Dashboard</SidebarItem>
        <SidebarItem href="/student-dashboard/my-course">My Course</SidebarItem>
        <SidebarItem href="/student-dashboard/comments">Comments</SidebarItem>
        <SidebarItem href="/student-dashboard/downloads" ><span className={styles.clicked}>Downloads</span></SidebarItem>
        <SidebarItem href="/student-dashboard/profile-setting">Profile Setting</SidebarItem>
        <SidebarItem href="/student-dashboard/settings">Settings</SidebarItem>
        <SidebarItem href="/login">Log Out</SidebarItem>
      </Sidebar>
      <div className={styles.mainContent}>
        <div className={styles.topBar}>
          <div className={styles.searchIcon}>
            <i className="fa fa-search"></i>
          </div>
          {/* Add additional icons if necessary */}
        </div>
        <AvailableDownloads />
        <RecentlyDownloadedMaterials />
      </div>
    </div>
  );
};

export default DownloadsPage;
