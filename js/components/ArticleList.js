import React from 'react';


const ArticleList = props => {
    if (!props.articles) {
        return (
            <div className='article-preview'>Loading...</div>
        );
    }

    if (props.articles.length === 0) {
        return (
            <div className='article-preview'>
                <h4>There are no articles to display</h4>
            </div>
        );
    }

    return (
        <div>
        {
            props.articles.map(article => {
                return (
                    
                    <h4>{article.title}</h4>
                );
            })
        }
        </div>
    );
}

export default ArticleList;