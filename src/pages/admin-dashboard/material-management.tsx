import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../components/common/Sidebar';
import SidebarItem from '../../components/common/SidebarItem';
import ProfileIcon from '../../components/common/ProfileIcon';
import MaterialTable from '../../components/admin/MaterialTable';
import SearchBar from '../../components/common/SearchBar';
import TopRightIcons from '../../components/common/TopRightIcons';
import styles from './MaterialManagement.module.css';

const MaterialManagement: FC = () => {
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
        <SidebarItem href="/admin-dashboard/material-management"><span className={styles.clicked}>Material Management</span></SidebarItem>
        <SidebarItem href="/admin-dashboard/reports">Reports & Statistics</SidebarItem>
        <SidebarItem href="/admin-dashboard/switch-views">Switch Views</SidebarItem>
        <SidebarItem href="/admin-dashboard/settings">Settings</SidebarItem>
        <SidebarItem href="/login">Log Out</SidebarItem>
      </Sidebar>
      <div className={styles.mainContent}>
        <div className={styles.topBar}>
          <TopRightIcons />
        </div>
        <h1>MATERIAL MANAGEMENT</h1>
        <div className={styles.searchContainer}>
          <SearchBar onSearch={(term) => console.log(term)} />
          <button className={styles.filterButton}>Filter</button>
        </div>
        <MaterialTable />
      </div>
    </div>
  );
};

export default MaterialManagement;
