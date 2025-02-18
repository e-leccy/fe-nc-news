import { useState, useEffect } from "react"
import { updateArticle } from "../utils/api"

function LikeButton ({article}) {

    const [vote, setVote] = useState(article.votes)
    const [upButtonDisabled, setUpButtonDisabled] = useState(false)
    const [downButtonDisabled, setDownButtonDisabled] = useState(false)

    function upVote() {
        setVote((currentVote) => currentVote +1)
        updateArticle(article.article_id, 1)
        setUpButtonDisabled(true)
        
    }

    function downVote() {
        setVote((currentVote) => currentVote -1)
        updateArticle(article.article_id, -1)
        setDownButtonDisabled(true)
    }

    
    return (<>
    <p>Votes:{vote} </p>
    <button onClick={upVote} disabled={upButtonDisabled}>Yay</button>
    <button onClick={downVote} disabled={downButtonDisabled}>Nay</button>

    </>)
    
}

export default LikeButton