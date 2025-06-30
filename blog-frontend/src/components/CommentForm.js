import React, { useState } from 'react';
import api from '../services/api';
import styles from '../styles/CommentForm.module.css';

const CommentForm = ({ articleId }) => {
    const [authorName, setAuthorName] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState({ type: null, message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });
        
        try {
            await api.addComment(articleId, { author_name: authorName, content });
            setAuthorName('');
            setContent('');
            setStatus({ type: 'success', message: 'Comment added successfully!' });
        } catch (error) {
            console.error('Error adding comment:', error);
            setStatus({ type: 'error', message: 'Failed to add comment. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={`${styles.commentForm} ${styles.animatedForm}`}>
            <h4 className={styles.commentTitle}>Add a Comment</h4>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Your Name</label>
                    <input
                        type="text"
                        className={styles.formInput}
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        required
                        placeholder="Enter your name"
                    />
                </div>
                
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Your Comment</label>
                    <textarea
                        className={`${styles.formInput} ${styles.formTextarea}`}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        placeholder="Write your comment here..."
                    />
                </div>
                
                <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Posting...' : 'Post Comment'}
                </button>
                
                {status.type === 'success' && (
                    <div className={styles.successMessage}>
                        <span>✓</span> {status.message}
                    </div>
                )}
                
                {status.type === 'error' && (
                    <div className={styles.errorMessage}>
                        <span>⚠</span> {status.message}
                    </div>
                )}
            </form>
        </div>
    );
};

export default CommentForm;