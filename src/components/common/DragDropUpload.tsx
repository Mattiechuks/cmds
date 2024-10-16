import React, { FC, useState } from 'react';
import styles from './DragDropUpload.module.css';

const DragDropUpload: FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className={styles.dropzone}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {file ? <p>{file.name}</p> : <p>Drag & Drop your files here</p>}
    </div>
  );
};

export default DragDropUpload;
