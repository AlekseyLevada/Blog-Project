import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ArticleList.module.css';

const ArticleList = ({ articles }) => {
    if (articles.length === 0) {
        return (
            <div className={styles.emptyMessage}>
                No articles found. Be the first to create one!
            </div>
        );
    }

    return (
        <div className={styles.articleList}>
            {articles.map((article, index) => (
                <div 
                    key={article.id} 
                    className={styles.articleCard}
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    <h3 className={styles.articleTitle}>
                        <Link to={`/articles/${article.id}`}>{article.title}</Link>
                    </h3>
                    
                    <div className={styles.articleMeta}>
                        <span>
                            {new Date(article.created_at).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                        {article.updated_at && article.updated_at !== article.created_at && (
                            <span>(updated)</span>
                        )}
                    </div>
                    
                    <p className={styles.articleExcerpt}>
                        {article.content.substring(0, 150)}...
                    </p>
                    
                    <Link to={`/articles/${article.id}`} className={styles.readMore}>
                        Read more
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ArticleList;