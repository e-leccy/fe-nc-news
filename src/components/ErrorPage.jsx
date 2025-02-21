import { useLocation } from "react-router-dom";

function ErrorPage() {
  const location = useLocation();

  const invalidArticle = location.pathname.includes("articles/");

  const invalidTopic = location.search.includes("topic");

  const invalidFilter = location.search.includes("sort" || "order");

  return (
    <>
      {invalidArticle ? <h2>404: Article Not Found</h2> : null}
      {invalidTopic ? <h2>404: Topic Not Found</h2> : null}
      {invalidFilter ? <h2>400: Invalid Sorting Option</h2> : null}
      {!invalidArticle && !invalidTopic && !invalidFilter ? (
        <h2>404: Page Not Found</h2>
      ) : null}
      <img
        className="error"
        src="https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="tiles spelling out error"
      ></img>
    </>
  );
}

export default ErrorPage;
