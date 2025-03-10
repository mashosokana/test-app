import React from "react";
import { posts } from "../../data/posts";
import classes from "./Home.module.css";

export const Home = () => {
  return (
    <div>
      <ul className={classes.container}>
        {posts.map((post) => {
          return (
            <li key={post.id} className={classes.list}>
              <a href={post.thumbnailUrl} className={classes.link}>
                <div className={classes.post}>
                  <div className={classes.postContent}>
                    <div className={classes.postInfo}>
                      <div className={classes.postDate}>
                        {new Date(post.createdAt).toLocaleDateString()}
                      </div>
                      <div className={classes.postCategories}>
                        {post.categories.map((category,id) => {
                          return (
                            <p key={id} className={classes.postCategory}>
                              {category}
                            </p>
                         );
                        })}
                      </div>
                    </div>
                    <p className={classes.postTitle}>APIで取得した{post.title}</p>
                    <div className={classes.postBody}
                    dangerouslySetInnerHTML={{__html:post.content}} />
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>

  );
};