import React from 'react';
import styles from '../styles/CommentList.module.css';

const CommentList = ({ comments }) => {
    if (!comments || comments.length === 0) {
        return (
            <div className={styles.emptyComments}>
                No comments yet. Be the first to comment!
            </div>
        );
    }

    return (
        <div className={styles.commentList}>
            {comments.map((comment, index) => (
                <div 
                    key={comment.id} 
                    className={styles.commentCard}
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <div className={styles.commentHeader}>
                        <span className={styles.commentAuthor}>{comment.author_name}</span>
                        <span className={styles.commentDate}>
                            {new Date(comment.created_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </span>
                    </div>
                    <p className={styles.commentContent}>{comment.content}</p>
                </div>
            ))}
        </div>
    );
};

export default CommentList;