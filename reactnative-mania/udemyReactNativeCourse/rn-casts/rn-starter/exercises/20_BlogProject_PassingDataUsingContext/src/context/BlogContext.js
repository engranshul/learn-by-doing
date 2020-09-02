import React from "react";

//creating context
const BlogContext = React.createContext();

//context has provider in it and exporting same..
export const BlogProvider = ({ children }) => {
  const blogPosts = [{ title: "Blog Post 1" }, { title: "Blog post 2" }];

  // we can pass primitives like below in value
  //return <BlogContext.Provider value={5}>{children}</BlogContext.Provider>;

  // passing objects in value concept
  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
