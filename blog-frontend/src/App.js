import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import ArticleForm from './components/ArticleForm';
import styles from './styles/App.module.css';

function App() {
    return (
        <Router>
            <div className={styles.app}>
                <header className={styles.header}>
                    <h1>Modern Blog</h1>
                </header>
                
                <main className={styles.mainContent}>
                    <Routes>
                        <Route 
                            path="/" 
                            element={
                                <div className={styles.animatedPage}>
                                    <HomePage />
                                </div>
                            } 
                        />
                        <Route 
                            path="/articles/:id" 
                            element={
                                <div className={styles.animatedPage}>
                                    <ArticlePage />
                                </div>
                            } 
                        />
                        <Route 
                            path="/articles/new" 
                            element={
                                <div className={styles.animatedPage}>
                                    <ArticleForm />
                                </div>
                            } 
                        />
                    </Routes>
                </main>
                
                <footer className={styles.footer}>
                    <p>© {new Date().getFullYear()} Modern Blog. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;