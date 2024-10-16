import React, { FC, useState, ChangeEvent, useEffect } from 'react';
import styles from './UploadMaterialsPage.module.css';
import axios from 'axios';

interface Upload {
  id: number;
  title: string;
  date: string;
}

const UploadMaterialsPage: FC = () => {
  const [file, setFile] = useState<File | null>(null);
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

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('No file selected for upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/api/upload-material', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert(`File ${file.name} uploaded successfully!`);
      setUploads([...uploads, response.data]);
      setFile(null);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Upload failed. Please try again.');
    }
  };

  return (
    <div className={styles.uploadMaterialsContainer}>
      <h1>Upload Materials</h1>
      <div className={styles.uploadBox}>
        <input type="file" onChange={handleFileChange} className={styles.fileInput} />
        <button onClick={handleUpload} className={styles.uploadButton}>
          Upload
        </button>
      </div>
      <h2>Recent Uploads</h2>
      <div className={styles.recentUploadsContainer}>
        {uploads.map((upload) => (
          <div key={upload.id} className={styles.uploadItem}>
            <h3>{upload.title}</h3>
            <p>Date: {upload.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadMaterialsPage;
