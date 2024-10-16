import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import styles from './CommentsGrid.module.css';
import { FaUserCircle } from 'react-icons/fa';

interface Comment {
  id: number;
  student: string;
  comment: string;
  date: string;
}

const CommentsGrid: FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/lecturer-comments'); // Adjust the URL if necessary
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className={styles.commentsContainer}>
      <h2>COMMENT</h2>
      <div className={styles.commentsGrid}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.commentBox}>
            <FaUserCircle className={styles.avatar} />
            <div className={styles.commentContent}>
              <p className={styles.commentText}><strong>{comment.student}:</strong> {comment.comment}</p>
              <button className={styles.replyButton}>MESSAGE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsGrid;
