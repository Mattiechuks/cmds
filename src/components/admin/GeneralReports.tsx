import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './GeneralReports.module.css';

interface Report {
  id: number;
  title: string;
  value: number;
}

const GeneralReports: FC = () => {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    axios.get('/api/reports')
      .then(response => setReports(response.data))
      .catch(error => console.error('Error fetching reports:', error));
  }, []);

  return (
    <div className={styles.reportsContainer}>
      <h2>General Reports</h2>
      {reports.map(report => (
        <div key={report.id} className={styles.reportItem}>
          <label>{report.title}</label>
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: `${report.value}%` }}>
              {report.value}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GeneralReports;
