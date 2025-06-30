import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ArticleDetail from '../components/ArticleDetail';
import api from '../services/api';
import styles from '../styles/ArticlePage.module.css';

const ArticlePage = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                const response = await api.getArticle(id);
                setArticle(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching article:', error);
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) return (
        <div className={styles.loading}>
            Loading article...
        </div>
    );

    if (!article) return (
        <div className={styles.container}>
            <div className={styles.notFound}>
                <div className={styles.notFoundIcon}>📄❌</div>
                <p>Article not found</p>
                <Link to="/" className={styles.backLink}>
                    Back to home
                </Link>
            </div>
        </div>
    );

    return (
        <div className={styles.container}>
            <div className={styles.contentEnter}>
                <ArticleDetail article={article} />
                <Link to="/" className={styles.backLink}>
                    Back to all articles
                </Link>
            </div>
        </div>
    );
};

export default ArticlePage;