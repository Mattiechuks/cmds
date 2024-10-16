import React, { FC, useEffect, useState } from 'react';
import styles from './CommentsPage.module.css';

interface Comment {
  id: number;
  studentName: string;
  comment: string;
  reply: string;
}

const CommentsPage: FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      // Fetch comments from API and set state
      const response = await fetch('/api/student-remarks'); // Replace with actual API endpoint
      const data = await response.json();
      setComments(data);
    };

    fetchComments();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p><strong>{comment.studentName}:</strong> {comment.comment}</p>
            <p><strong>Reply:</strong> {comment.reply}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsPage;
