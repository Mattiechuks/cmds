import React, { FC } from 'react';
import Sidebar from '../../components/common/Sidebar';
import SidebarItem from '../../components/common/SidebarItem';
import ProfileIcon from '../../components/common/ProfileIcon';
import CommentsGrid from '../../components/lecturer/CommentsGrid';
import TopRightIcons from '../../components/common/TopRightIcons';
import styles from './CommentsPage.module.css';

const CommentsPage: FC = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar>
        <ProfileIcon src="path/to/user/photo.jpg" alt="User Photo" /> {/* Update with user's photo */}
        <SidebarItem href="/lecturer-dashboard">Dashboard</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/upload">Upload Materials</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/my-materials">My Materials</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/comments"><span className={styles.clicked}>Comments</span></SidebarItem>
        <SidebarItem href="/lecturer-dashboard/profile-setting">Profile Settings</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/settings">Settings</SidebarItem>
        <SidebarItem href="/login">Log Out</SidebarItem>
      </Sidebar>
      <div className={styles.mainContent}>
        <div className={styles.topBar}>
          <TopRightIcons />
        </div>
        <CommentsGrid />
      </div>
    </div>
  );
};

export default CommentsPage;
