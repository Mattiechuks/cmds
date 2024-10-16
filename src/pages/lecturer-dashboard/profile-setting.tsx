import React, { FC } from 'react';
import Sidebar from '../../components/common/Sidebar';
import SidebarItem from '../../components/common/SidebarItem';
import ProfileIcon from '../../components/common/ProfileIcon';
import ProfileSettingForm from '../../components/lecturer/ProfileSettingForm';
import TopRightIcons from '../../components/common/TopRightIcons';
import styles from './ProfileSettingPage.module.css';

const ProfileSettingPage: FC = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar>
        <ProfileIcon src="path/to/user/photo.jpg" alt="User Photo" /> {/* Update with user's photo */}
        <SidebarItem href="/lecturer-dashboard">Dashboard</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/upload">Upload Materials</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/my-materials">My Materials</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/comments">Comments</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/profile-setting"><span className={styles.clicked}>Profile Setting</span></SidebarItem>
        <SidebarItem href="/lecturer-dashboard/settings">Settings</SidebarItem>
        <SidebarItem href="/login">Log Out</SidebarItem>
      </Sidebar>
      <div className={styles.mainContent}>
        <div className={styles.topBar}>
          <TopRightIcons />
        </div>
        <ProfileSettingForm />
      </div>
    </div>
  );
};

export default ProfileSettingPage;
