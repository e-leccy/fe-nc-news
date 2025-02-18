import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-j3jt.onrender.com/api",
});

export const getArticles = () => {
  return newsApi
    .get("/articles")
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
      console.log("posted", response.data.comment);
    });
};
