import React from 'react'

export const Card = ({ imgSrc, articleUrl, author, description, title }) => {
    return (
        <div style={styles.card}>
            <img src={imgSrc} alt="..." style={styles.image} />
            <div style={styles.content}>
                <h2 style={styles.title}>
                    <a href={articleUrl} style={styles.link}>{title}</a>
                </h2>
                <p style={styles.author}>By {author}</p>
                <p style={styles.description}>{description}</p>
                <a href={articleUrl} style={styles.readMore}>Read More ...</a>
            </div>
        </div>
    )
}

const styles = {
    card: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        transition: 'transform 0.2s ease-in-out',
    },
    cardHover: {
        transform: 'scale(1.05)',
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    },
    content: {
        padding: '20px',
    },
    title: {
        fontSize: '1.5em',
        margin: '10px 0',
        color: '#333',
    },
    link: {
        textDecoration: 'none',
        color: '#3498db',
    },
    linkHover: {
        textDecoration: 'underline',
    },
    author: {
        color: '#888',
        fontSize: '0.9em',
        marginBottom: '10px',
    },
    description: {
        fontSize: '1em',
        color: '#555',
        marginBottom: '20px',
    },
    readMore: {
        color: '#3498db',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    readMoreHover: {
        textDecoration: 'underline',
    },
};

