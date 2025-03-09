import React from 'react';
import { posts } from './data/posts';
import Article from './Article';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <a className="header-link1" href="/">Blog</a>
        <a className="header-link2" href="/contact">お問い合わせ</a>
      </header>
      <div className="container">
        {posts.map((post) => (
          <Article
            key={post.id}
            title={post.title}
            createdAt={post.createdAt}
            categories={post.categories}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

