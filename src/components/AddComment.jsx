import { useState } from "react"
import AddCommentForm from "./AddCommentForm"

function AddComment({article_id, setCommentsUpdate}) {
    const [isVisible, setIsVisible] = useState(false)

return (
  <>
  <button onClick={() => {
    setIsVisible(!isVisible)
  }}>Comment</button>

  {isVisible? (<AddCommentForm article_id={article_id} setCommentsUpdate={setCommentsUpdate}/>) 
  : null}
  </> 
)

}

export default AddComment