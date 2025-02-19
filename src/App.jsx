import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import SingleArticle from "./components/SingleArticle";
import Header from "./components/Header";
import { UserAccountProvider } from "./components/UserAccount";
import UserLoginForm from "./components/UserLoginForm";
import Users from "./components/Users";
import UserProfile from "./components/UserProfile";
import TopicsList from "./components/TopicsList";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <>
      <UserAccountProvider>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/login" element={<UserLoginForm />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:username" element={<UserProfile />} />
          <Route path="/topics" element={<TopicsList />} />
          <Route path="/articles" element={<ArticleList />} />
        </Routes>
      </UserAccountProvider>
    </>
  );
}

export default App;
