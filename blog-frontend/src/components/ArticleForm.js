import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/ArticleForm.module.css';

const ArticleForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        
        try {
            await api.createArticle({ title, content });
            navigate('/');
        } catch (error) {
            console.error('Error creating article:', error);
            setError('Failed to create article. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={`${styles.formContainer} ${styles.animatedForm}`}>
            <h2 className={styles.formTitle}>Add New Article</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Title</label>
                    <input
                        type="text"
                        className={styles.formInput}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        placeholder="Enter article title"
                    />
                </div>
                
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Content</label>
                    <textarea
                        className={`${styles.formInput} ${styles.formTextarea}`}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        placeholder="Write your article content here..."
                    />
                </div>
                
                {error && <div className={styles.errorMessage}>{error}</div>}
                
                <button 
                    type="submit" 
                    className={styles.submitButton}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Publishing...' : 'Publish Article'}
                </button>
            </form>
        </div>
    );
};

export default ArticleForm;