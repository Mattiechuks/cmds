import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import styles from './RecentUploadsSlider.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Upload {
  id: number;
  title: string;
  date: string;
}

const RecentUploadsSlider: FC = () => {
  const [uploads, setUploads] = useState<Upload[]>([]);

  useEffect(() => {
    const fetchUploads = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/recent-uploads'); // Adjust the URL if necessary
        setUploads(response.data);
      } catch (error) {
        console.error('Error fetching recent uploads:', error);
      }
    };

    fetchUploads();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.sliderContainer}>
      <h2>Recent Uploads</h2>
      <Slider {...settings}>
        {uploads.map((upload) => (
          <div key={upload.id} className={styles.slide}>
            <h3>{upload.title}</h3>
            <p>Date: {upload.date}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecentUploadsSlider;
