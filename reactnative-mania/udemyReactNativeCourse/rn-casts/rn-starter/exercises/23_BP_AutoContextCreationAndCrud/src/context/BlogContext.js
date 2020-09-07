import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  console.log("state is...", state);
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        {
          /* generating id concept */
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete_blogpost":
      console.log("about to delete a blog post..");
      return state.filter((blogPost) => {
        return blogPost.id !== action.payload; // return is important
      });

    case "edit_blogpost":
      console.log("about to edit blog post..");
      return state.map((blogPost) => {
        if (blogPost.id == action.payload.id) {
          return action.payload;
        } else return blogPost;
      });

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {

  // concept of how to provide parameters to these methods in case
  // of automatic context creation
  return (title, content, callback) => {
    dispatch({
      type: "add_blogpost",
      payload: { title: title, content: content },
    });
    // concept of calling back the function that is provided in argument
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({
      type: "edit_blogpost",
      payload: { id: id, title: title, content: content },
    });
    // concept of calling callback function only if it is provided
    // in argument..
    if (callback) {
      callback();
    }
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [
    { id: 1, title: "my title1", content: "my content1" },
    { id: 2, title: "my title2", content: "my content2" },
  ]
);
