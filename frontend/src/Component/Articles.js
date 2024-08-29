import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from './Card';

export const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/articles')
            .then(response => {setArticles(response.data)
            })
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Latest Articles</h1>
            <div style={styles.grid}>
                {
                    articles.length !=0 ?articles.map(article => (
                        <Card key={article._id} imgSrc={article.urlToImage} articleUrl={article.url} author={article.author} description={article.description} title={article.title}/>
                    )):<h2>Sorry No Data to Show here!</h2>
                }
            </div>
        </div>
    );
};
const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '40px',
        fontSize: '2.5em',
        color: '#333',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
    },
};

export default Articles;
