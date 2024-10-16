import React, { FC, useEffect, useState } from 'react';
import styles from './StudentCommentsSection.module.css';
import mockData from '../../mockData/lecturerData.json'; // Import mock data

interface Comment {
  id: number;
  student: string;
  comment: string;
  date: string;
}

const StudentCommentsSection: FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    setComments(mockData.comments); // Use mock data
  }, []);

  return (
    <div className={styles.commentsContainer}>
      <h2>Student Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.commentBox}>
          <h3>{comment.student}</h3>
          <p>{comment.comment}</p>
          <p className={styles.commentDate}>Date: {comment.date}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentCommentsSection;
