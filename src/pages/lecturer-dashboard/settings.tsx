import React, { FC } from 'react';
import Sidebar from '../../components/common/Sidebar';
import SidebarItem from '../../components/common/SidebarItem';
import ProfileIcon from '../../components/common/ProfileIcon';
import GeneralSettings from '../../components/lecturer/GeneralSettings';
import AccountSettings from '../../components/lecturer/AccountSettings';
import NotificationSettings from '../../components/lecturer/NotificationSettings';
import PrivacySettings from '../../components/lecturer/PrivacySettings';
import LanguagePreference from '../../components/lecturer/LanguagePreference';
import HelpSupport from '../../components/lecturer/HelpSupport';
import TopRightIcons from '../../components/common/TopRightIcons';
import styles from './SettingsPage.module.css';

const SettingsPage: FC = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar>
        <ProfileIcon src="path/to/user/photo.jpg" alt="User Photo" /> {/* Update with user's photo */}
        <SidebarItem href="/lecturer-dashboard">Dashboard</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/upload">Upload Materials</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/my-materials">My Materials</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/comments">Comments</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/profile-setting">Profile Setting</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/settings"><span className={styles.clicked}>Settings</span></SidebarItem>
        <SidebarItem href="/login">Log Out</SidebarItem>
      </Sidebar>
      <div className={styles.mainContent}>
        <div className={styles.topBar}>
          <TopRightIcons />
        </div>
        <GeneralSettings />
        <AccountSettings />
        <NotificationSettings />
        <PrivacySettings />
        <LanguagePreference />
        <HelpSupport />
      </div>
    </div>
  );
};

export default SettingsPage;
