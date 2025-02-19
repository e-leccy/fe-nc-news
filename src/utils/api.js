import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-j3jt.onrender.com/api",
});

export const getArticles = (topic) => {
  return newsApi
    .get("/articles", { params: { topic } })
    .then((response) => {
      return response.data.articles;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSingleArticle = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}`)
    .then((response) => {
      return response.data.article;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCommentsByArticle = (article_id) => {
  return newsApi
    .get(`/articles/${article_id}/comments`)
    .then((response) => {
      return response.data.comments;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUsers = () => {
  return newsApi
    .get("/users")
    .then((response) => {
      return response.data.users;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getSingleUser = (username) => {
  return newsApi
    .get(`/users/${username}`)
    .then((response) => {
      return response.data.user;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getTopics = () => {
  return newsApi
    .get("/topics")
    .then((response) => {
      return response.data.topics;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateArticle = (article_id, vote) => {
  return newsApi
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then((response) => {
      console.log("Voted!");
    });
};

export const postComment = (article_id, commentData) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, commentData)
    .then((response) => {
      console.log("Posted!");
    });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`).then((response) => {
    console.log("Deleted!");
  });
};
