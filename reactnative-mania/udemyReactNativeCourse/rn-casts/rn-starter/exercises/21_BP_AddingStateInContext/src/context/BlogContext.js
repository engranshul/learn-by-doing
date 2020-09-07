import React, { useState } from "react";

//creating context
const BlogContext = React.createContext();

//context has provider in it and exporting same..
export const BlogProvider = ({ children }) => {

  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post ${blogPosts.length + 1}` },
    ]);
  };

  // similarly just like addBlogPost..we can have other methods
  // like editBlogPost,deleteBlogPost etc

  return (
    /* concept of passing data and a way to manipulate that data
    by assigning it to value key */
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
