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
      <p className="content">
        {content.split('<br/>').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default Article;