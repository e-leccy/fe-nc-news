import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function ArticleCard({article}){
    return (
        <>
        <div className="article-card">
        <Card style={{ width: '18rem' }}>
          <Link to={`/articles/${article.article_id}`}>
      <Card.Header>Title: {article.title}</Card.Header>
      </Link>
      <ListGroup variant="flush">
        <ListGroup.Item>Author: {article.author}</ListGroup.Item>
        <ListGroup.Item>Comments: {article.comment_count}</ListGroup.Item>
        <ListGroup.Item>Votes:{article.votes}</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
        
        </>
    )
}

export default ArticleCard