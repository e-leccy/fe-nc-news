import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import moment from "moment"

function CommentCard({comment}) {

    return (
        <>
        <div className="comment-card">
        <Card style={{ width: '18rem' }}>
      <Card.Header>Commenter: {comment.author}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Posted: {moment(comment.created_at).format("MMMM Do YYYY, hh:mm a")}</ListGroup.Item>
        <ListGroup.Item>{comment.body}</ListGroup.Item>
        <ListGroup.Item>Votes:{comment.votes}</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
        
        </>
    )

}

export default CommentCard