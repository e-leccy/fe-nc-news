import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import moment from "moment";
import { useContext, useState } from "react";
import { UserAccount } from "./UserAccount";
import { deleteComment } from "../utils/api";

function CommentCard({ comment, setCommentsUpdate }) {
  const { loggedInUser, setLoggedInUser } = useContext(UserAccount);
  const [errorMsg, setErrorMsg] = useState(false);
  const [deleted, setDeleted] = useState(false);

  function handleDelete(event) {
    event.preventDefault();
    setCommentsUpdate(false);
    deleteComment(comment.comment_id)
      .then((response) => {
        setErrorMsg(false);
        setCommentsUpdate(true);
      })
      .catch((error) => {
        setErrorMsg(true);
        console.log(error);
      });
  }

  return (
    <>
      <div id="comment-card">
        <Card style={{ width: "18rem" }}>
          <Card.Header>Commenter: {comment.author}</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              Posted:{" "}
              {moment(comment.created_at).format("MMMM Do YYYY, hh:mm a")}
            </ListGroup.Item>
            <ListGroup.Item>{comment.body}</ListGroup.Item>
            <ListGroup.Item>Votes:{comment.votes}</ListGroup.Item>
          </ListGroup>
          {loggedInUser === comment.author && (
            <button onClick={handleDelete}>Delete</button>
          )}
          {errorMsg ? <p>Something went wrong!</p> : null}
        </Card>
      </div>
    </>
  );
}

export default CommentCard;
