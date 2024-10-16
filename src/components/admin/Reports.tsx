import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Reports.module.css';

interface Report {
  id: number;
  title: string;
  content: string;
  date: string;
}

const Reports: FC = () => {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/admin/reports'); // Adjust the URL if necessary
        setReports(response.data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className={styles.reportsContainer}>
      <h2>Reports</h2>
      {reports.map((report) => (
        <div key={report.id} className={styles.reportBox}>
          <h3>{report.title}</h3>
          <p>{report.content}</p>
          <span>Date: {report.date}</span>
        </div>
      ))}
    </div>
  );
};

export default Reports;
