import React, { FC, useEffect, useState } from 'react';
import Slider from 'react-slick';
import styles from './CourseMaterialsSlider.module.css';
import mockData from '../../mockData/studentData.json'; // Import mock data
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CourseMaterial {
  id: number;
  title: string;
  uploadedBy: string;
  date: string;
}

const CourseMaterialsSlider: FC = () => {
  const [materials, setMaterials] = useState<CourseMaterial[]>([]);

  useEffect(() => {
    setMaterials(mockData.courseMaterials); // Use mock data
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
      <h2>Course Materials</h2>
      <Slider {...settings}>
        {materials.map((material) => (
          <div key={material.id} className={styles.slide}>
            <h3>{material.title}</h3>
            <p>Uploaded by: {material.uploadedBy}</p>
            <p>Date: {material.date}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CourseMaterialsSlider;
