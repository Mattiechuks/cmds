import React from 'react';
import Sidebar from '../../components/common/Sidebar';
import SidebarItem from '../../components/common/SidebarItem';
import ProfileIcon from '../../components/common/ProfileIcon';
import GeneralSettings from '../../components/student/GeneralSettings';
import AccountSettings from '../../components/student/AccountSettings';
import NotificationSettings from '../../components/student/NotificationSettings';
import PrivacySettings from '../../components/student/PrivacySettings';
import DisableAccount from '../../components/student/DisableAccount';
import LanguagePreference from '../../components/student/LanguagePreference';
import HelpSupport from '../../components/student/HelpSupport';
import styles from './SettingsPage.module.css';

const SettingsPage = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar>
        <ProfileIcon src="path/to/user/photo.jpg" alt="User Photo" /> {/* Update with user's photo */}
        <SidebarItem href="/student-dashboard">Dashboard</SidebarItem>
        <SidebarItem href="/student-dashboard/my-course">My Course</SidebarItem>
        <SidebarItem href="/student-dashboard/comments">Comments</SidebarItem>
        <SidebarItem href="/student-dashboard/downloads">Downloads</SidebarItem>
        <SidebarItem href="/student-dashboard/profile-setting">Profile Setting</SidebarItem>
        <SidebarItem href="/student-dashboard/settings"><span className={styles.clicked}>Settings</span></SidebarItem>
        <SidebarItem href="/login">Log Out</SidebarItem>
      </Sidebar>
      <div className={styles.mainContent}>
        <div className={styles.topBar}>
          <div className={styles.searchIcon}>
            <i className="fa fa-search"></i>
          </div>
        </div>
        <GeneralSettings />
        <AccountSettings />
        <NotificationSettings />
        <PrivacySettings />
        <DisableAccount />
        <LanguagePreference />
        <HelpSupport />
      </div>
    </div>
  );
};

export default SettingsPage;
