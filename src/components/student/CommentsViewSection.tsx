import React, { FC, useEffect, useState } from 'react';
import styles from './CommentsViewSection.module.css';
import mockData from '../../mockData/studentData.json'; // Import mock data

interface Comment {
  id: number;
  student: string;
  comment: string;
  reply: string;
}

const CommentsViewSection: FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    setComments(mockData.comments); // Use mock data
  }, []);

  return (
    <div className={styles.commentsContainer}>
      <h2>COMMENT</h2>
      <div className={styles.commentsGrid}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.commentBox}>
            <div className={styles.avatarPlaceholder}></div>
            <div className={styles.commentContent}>
              <p className={styles.commentText}><strong>{comment.student}:</strong> {comment.comment}</p>
              <button className={styles.messageButton}>MESSAGE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsViewSection;
