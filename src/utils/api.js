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
