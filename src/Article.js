import React from 'react';

const Article = ({ title, createdAt, categories, content }) => {
  return (
    <div className="Home_list">
      <div className="meta-container">
        <span className="created-at">{new Date(createdAt).toLocaleDateString()}</span>
        <div className="categories-container">
          {categories.map((category, index) => (
            <span key={index} className="category">{category}</span>
          ))}
        </div>
      </div>
      <p className="article-title">APIで取得した {title}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Article;