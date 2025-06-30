import React, { useEffect, useState } from 'react';
import ArticleList from '../components/ArticleList';
import { Link } from 'react-router-dom';
import api from '../services/api';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await api.getArticles();
                setArticles(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching articles:', error);
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    if (loading) return (
        <div className={styles.loading}>
            Loading articles...
        </div>
    );

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Blog Articles</h1>
                <Link to="/articles/new" className={styles.addButton}>
                    <span>+</span> Add New Article
                </Link>
            </div>
            <ArticleList articles={articles} />
        </div>
    );
};

export default HomePage;