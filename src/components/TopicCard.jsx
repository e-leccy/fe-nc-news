import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function TopicCard({ topic }) {
  return (
    <>
      <div className="topic-card">
        <Card style={{ width: "18rem" }}>
          <Link to={`/articles?topic=${topic.slug}`}>
            <Card.Header>{topic.slug}</Card.Header>
          </Link>
          <ListGroup variant="flush">
            <ListGroup.Item>{topic.description}</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </>
  );
}

export default TopicCard;
