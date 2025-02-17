import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ArticleCard({article}){
    return (
        <>
        <div className="article-card">
        <Card style={{ width: '18rem' }}>
      <Card.Header>Title: {article.title}</Card.Header>
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