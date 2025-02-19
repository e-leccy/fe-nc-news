import { useState } from "react"
import { postComment } from "../utils/api"
import CommentCard from "./CommentCard"

function AddCommentForm({article_id, setCommentsUpdate}) {
    const [commentToAdd, setCommentToAdd] = useState({username: "", body: ""})
    const [errorMsg, setErrorMsg] = useState(false)
    const [posting, setPosting] = useState(false)

    function handleChange(event) {
    const name = event.target.name 
    const value = event.target.value
    setCommentToAdd(values => ({...values, [name]: value}))
    }

    function handleSubmit(event){
    event.preventDefault()
    setCommentsUpdate(false)
    setPosting(true)
    postComment(article_id, commentToAdd)
    .then((response) => {
        <CommentCard comment={commentToAdd} />
        setCommentsUpdate(true)
        setPosting(false)
        setCommentToAdd({username: "", body: ""})
        setErrorMsg(false)
    })
    .catch((error) => {
        setPosting(false)
        setErrorMsg(true)
        console.log(error)
    })
    }

    if (posting){
        return <p>Posting...</p>
    }

return (
    <>
<form>
    <label htmlFor="username">Username:</label>
    <input type="text" placeholder='username' id="username" name="username" required
    value={commentToAdd.username} onChange={handleChange} />

    <label htmlFor="comment">Comment:</label>
    <input type="text" placeholder='comment' id="comment" name="body" required
    value={commentToAdd.body} onChange={handleChange} />

    <button type="submit" onClick={handleSubmit} >Submit</button>

</form>
{errorMsg ? (<p>Something went wrong!</p>) : null}
</>
)
}

export default AddCommentForm