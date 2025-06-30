import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import styles from '../styles/ArticleDetail.module.css';

const ArticleDetail = ({ article }) => {
    return (
        <div className={styles.articleContainer}>
            <h1 className={styles.articleTitle}>{article.title}</h1>
            
            <div className={styles.articleMeta}>
                <span>Published: {new Date(article.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}</span>
                
                {article.updated_at && (
                    <span>Updated: {new Date(article.updated_at).toLocaleDateString()}</span>
                )}
            </div>
            
            <div className={styles.articleContent}>
                {article.content}
            </div>
            
            <div className={styles.animatedSection}>
                <h2 className={styles.sectionTitle}>Comments ({article.comments?.length || 0})</h2>
                <CommentList comments={article.comments || []} />
            </div>
            
            <div className={styles.animatedSection}>
                <h2 className={styles.sectionTitle}>Add Your Comment</h2>
                <CommentForm articleId={article.id} />
            </div>
        </div>
    );
};

export default ArticleDetail;