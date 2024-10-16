import React, { FC } from 'react';
import Sidebar from '../../components/common/Sidebar';
import SidebarItem from '../../components/common/SidebarItem';
import ProfileIcon from '../../components/common/ProfileIcon';
import MyMaterialsGrid from '../../components/lecturer/MyMaterialsGrid';
import TopRightIcons from '../../components/common/TopRightIcons';
import styles from './MyMaterialsPage.module.css';

const MyMaterialsPage: FC = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar>
        <ProfileIcon src="path/to/user/photo.jpg" alt="User Photo" /> {/* Update with user's photo */}
        <SidebarItem href="/lecturer-dashboard">Dashboard</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/upload">Upload Materials</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/my-materials"><span className={styles.clicked}>My Materials</span></SidebarItem>
        <SidebarItem href="/lecturer-dashboard/comments">Comments</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/profile-setting">Profile Settings</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/settings">Settings</SidebarItem>
        <SidebarItem href="/login">Log Out</SidebarItem>
      </Sidebar>
      <div className={styles.mainContent}>
        <div className={styles.topBar}>
          <TopRightIcons />
        </div>
        <MyMaterialsGrid />
      </div>
    </div>
  );
};

export default MyMaterialsPage;
