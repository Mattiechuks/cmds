import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../components/common/Sidebar';
import SidebarItem from '../../components/common/SidebarItem';
import ProfileIcon from '../../components/common/ProfileIcon';
import LoginTrendsChart from '../../components/admin/LoginTrendsChart';
import UserActivityChart from '../../components/admin/UserActivityChart';
import CourseEngagements from '../../components/admin/CourseEngagements';
import GeneralReports from '../../components/admin/GeneralReports';
import OverviewPanel from '../../components/admin/OverviewPanel';
import TopRightIcons from '../../components/common/TopRightIcons';
import styles from './Reports.module.css';

const Reports: FC = () => {
  const [profile, setProfile] = useState({ name: '', profilePicture: '' });

  useEffect(() => {
    axios.get('/api/users/profile')
      .then(response => setProfile(response.data))
      .catch(error => console.error('Error fetching profile data:', error));
  }, []);

  return (
    <div className={styles.dashboard}>
      <Sidebar>
        <ProfileIcon src={profile.profilePicture} alt={`${profile.name}'s Photo`} />
        <SidebarItem href="/admin-dashboard">Dashboard</SidebarItem>
        <SidebarItem href="/admin-dashboard/user-management">User Management</SidebarItem>
        <SidebarItem href="/admin-dashboard/material-management">Material Management</SidebarItem>
        <SidebarItem href="/admin-dashboard/reports"><span className={styles.clicked}>Reports & Statistics</span></SidebarItem>
        <SidebarItem href="/admin-dashboard/switch-views">Switch Views</SidebarItem>
        <SidebarItem href="/admin-dashboard/settings">Settings</SidebarItem>
        <SidebarItem href="/login">Log Out</SidebarItem>
      </Sidebar>
      <div className={styles.mainContent}>
        <div className={styles.topBar}>
          <TopRightIcons />
        </div>
        <h1>Report and Statistics</h1>
        <OverviewPanel />
        <div className={styles.ChartsContainer}>
          <LoginTrendsChart />
          <UserActivityChart />
        </div>
        <CourseEngagements />
        <GeneralReports />
      </div>
    </div>
  );
};

export default Reports;
