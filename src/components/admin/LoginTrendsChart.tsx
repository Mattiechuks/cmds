import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from './LoginTrendsChart.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface LoginTrend {
  date: string;
  logins: number;
}

const LoginTrendsChart: FC = () => {
  const [loginTrends, setLoginTrends] = useState<LoginTrend[]>([]);

  useEffect(() => {
    axios.get('/api/login-trends')
      .then(response => setLoginTrends(response.data))
      .catch(error => console.error('Error fetching login trends:', error));
  }, []);

  const data = {
    labels: loginTrends.map(trend => trend.date),
    datasets: [
      {
        label: 'Logins',
        data: loginTrends.map(trend => trend.logins),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.chartContainer}>
      <h2>Login Trends</h2>
      <Bar data={data} />
    </div>
  );
};

export default LoginTrendsChart;
