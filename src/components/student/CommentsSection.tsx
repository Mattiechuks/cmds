import React, { FC, useEffect, useState } from 'react';
import styles from './CommentsSection.module.css';
import axios from 'axios';

interface Comment {
  id: number;
  student: string;
  comment: string;
  reply: string;
}

const CommentsSection: FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/student-comments'); // Adjust the URL if necessary
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className={styles.commentsContainer}>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id} className={styles.commentBox}>
          <p className={styles.commentText}><strong>{comment.student}:</strong> {comment.comment}</p>
          <p className={styles.replyText}><strong>Reply:</strong> {comment.reply}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsSection;
