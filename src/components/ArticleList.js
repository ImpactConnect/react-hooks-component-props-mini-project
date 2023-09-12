import React from "react";
import Article from "./Article";
import { blogData } from "../data/blog";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date || "January 1, 1970"} // Use default date if not provided
          preview={post.preview}
          minutes={post.minutes}
        />
      ))}
    </main>
  );
}

export default ArticleList;
