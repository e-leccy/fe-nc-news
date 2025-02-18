import { useEffect, useState } from "react"
import { getCommentsByArticle } from "../utils/api"
import CommentCard from "./CommentCard"

function CommentList ({article_id}) {
    const [comments, setComments] = useState([]) 
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getCommentsByArticle(article_id).then((result) => {
            setComments(result)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <>
        <ul>
            {comments.map((comment) => {
                return <li>
                    <CommentCard comment={comment} />
                </li>
            })}
        </ul>
        </>
    )
}

export default CommentList