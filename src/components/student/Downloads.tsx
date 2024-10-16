import React, { FC, useEffect, useState } from 'react';
import styles from './Downloads.module.css';

interface Download {
  id: number;
  title: string;
  date: string;
}

const Downloads: FC = () => {
  const [downloads, setDownloads] = useState<Download[]>([]);

  useEffect(() => {
    const fetchDownloads = async () => {
      // Fetch downloads from API and set state
      const response = await fetch('/api/downloads'); // Replace with actual API endpoint
      const data = await response.json();
      setDownloads(data);
    };

    fetchDownloads();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Downloads</h1>
      <ul>
        {downloads.map((download) => (
          <li key={download.id}>
            <span>{download.title}</span>
            <span>{download.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Downloads;
