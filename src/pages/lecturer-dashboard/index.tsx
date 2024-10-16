import React, { FC } from 'react';
import Sidebar from '../../components/common/Sidebar';
import SidebarItem from '../../components/common/SidebarItem';
import ProfileIcon from '../../components/common/ProfileIcon';
import RecentUploadsSlider from '../../components/lecturer/RecentUploadsSlider';
import StudentCommentsSection from '../../components/lecturer/StudentCommentsSection';
import UploadMaterials from '../../components/lecturer/UploadMaterialsPage';
import AnalyticsSection from '../../components/lecturer/AnalyticsSection';
import TopRightIcons from '../../components/common/TopRightIcons';
import styles from './LecturerDashboard.module.css';


const LecturerDashboard: FC = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar>
        <ProfileIcon src="path/to/user/photo.jpg" alt="User Photo" /> {/* Update with user's photo */}
        <SidebarItem href="/lecturer-dashboard"><span className={styles.clicked}>Dashboard</span></SidebarItem>
        <SidebarItem href="/lecturer-dashboard/upload">Upload Materials</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/my-materials">My Materials</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/comments">Comments</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/profile-setting">Profile Settings</SidebarItem>
        <SidebarItem href="/lecturer-dashboard/settings">Settings</SidebarItem>
        <SidebarItem href="/login">Log Out</SidebarItem>
      </Sidebar>
      <div className={styles.mainContent}>
      <div className={styles.topBar}>
          <TopRightIcons />
        </div>
        <RecentUploadsSlider />
        <StudentCommentsSection />
        <UploadMaterials />
        <AnalyticsSection />
      </div>
    </div>
  );
};

export default LecturerDashboard;
