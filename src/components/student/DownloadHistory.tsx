import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './DownloadHistory.module.css';

interface Download {
  id: number;
  title: string;
  uploadedBy: string;
  date: string;
}

const DownloadHistory: FC = () => {
  const [downloads, setDownloads] = useState<Download[]>([]);

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/download-history'); // Adjust the URL if necessary
        setDownloads(response.data);
      } catch (error) {
        console.error('Error fetching download history:', error);
      }
    };

    fetchDownloads();
  }, []);

  return (
    <div className={styles.downloadsContainer}>
      <h2>Download History</h2>
      {downloads.map((download) => (
        <div key={download.id} className={styles.downloadBox}>
          <p className={styles.downloadTitle}>{download.title}</p>
          <p className={styles.downloadDetails}>Uploaded by: {download.uploadedBy}</p>
          <p className={styles.downloadDetails}>Date: {download.date}</p>
        </div>
      ))}
    </div>
  );
};

export default DownloadHistory;
