import { useEffect, useState } from "react"
import { getCommentsByArticle } from "../utils/api"
import CommentCard from "./CommentCard"

function CommentList ({article_id, commentsUpdate}) {
    const [comments, setComments] = useState([]) 
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getCommentsByArticle(article_id).then((result) => {
            setComments(result)
            setLoading(false)
        })
    }, [commentsUpdate])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <>
        <ul>
            {comments.map((comment) => {
                return <li key={comment.comment_id}>
                    <CommentCard comment={comment} />
                </li>
            })}
        </ul>
        </>
    )
}

export default CommentList