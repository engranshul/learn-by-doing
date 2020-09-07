import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  console.log("state is...", state);
  switch (action.type) {
    case "get_blogposts":
      return action.payload;
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

const getBlogPosts = (dispatch) => {
  console.log("in getblogposts..")
  return async () => {
    /* we assume that /blogposts api will return latest data
    so in its reducer we just return whatever data we got 4m api */
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

/* 
remember that in all add,delete and edit blog post..its the role 
of jsonServer(axios)..to update db.json(fake database)...but we
call dispatch after it so that value of state gets updated in 
memmory also..*/

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });

    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    /* below dispatch call helps in refreshing indexscreen coz
    above call just delete from db.json file..below dispatch calls the 
    reducer and updates state..as state is updated then all screen that
    uses that state get rerendered again....*/
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });

    dispatch({
      type: "edit_blogpost",
      payload: { id, title, content },
    });
    if (callback) {
      callback();
    }
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
