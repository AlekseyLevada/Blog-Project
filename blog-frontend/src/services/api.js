import axios from 'axios';

const api = axios.create({
    baseURL: 'http://backend:8000/api',
});

const apiService = {
    getArticles() {
        return api.get('/articles');
    },
    getArticle(id) {
        return api.get(`/articles/${id}`);
    },
    createArticle(article) {
        return api.post('/articles', article);
    },
    addComment(articleId, comment) {
        return api.post(`/articles/${articleId}/comments`, comment);
    },
};

export default apiService;