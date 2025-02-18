import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleArticle } from "../utils/api"
import CommentList from "./CommentList"


function SingleArticle () {
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)

const {article_id} = useParams()

useEffect(() => {
    setLoading(true)
    getSingleArticle(article_id).then((result) => {
        setArticle(result)
        setLoading(false)
    })
}, [])

if (loading) {
    return <p>Loading...</p>
}

return (
    <>
    <div className="article">
    <h2>{article.title}</h2>
    <h3>Author: {article.author}</h3>
    <p>Created at: {article.created_at}</p>
    <img src={article.article_img_url}/>
    <p>{article.body}</p>
    <p>Topic: {article.topic}</p>
    <p>Comments: {article.comment_count}</p>
    <p>Votes:{article.votes} </p>
    </div>
    
    <CommentList article_id={article_id}/>
    </>
)

}

export default SingleArticle