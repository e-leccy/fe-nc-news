import { useState, useEffect } from "react"
import { updateArticle } from "../utils/api"

function LikeButton ({article}) {

    const [vote, setVote] = useState(article.votes)
    const [upButtonDisabled, setUpButtonDisabled] = useState(false)
    const [downButtonDisabled, setDownButtonDisabled] = useState(false)

    function handleVote(voteChange){
        setVote((currentVote) => currentVote + voteChange)
        updateArticle(article.article_id, voteChange)
        if (voteChange === 1){
            setUpButtonDisabled(true)
        } else {
            setDownButtonDisabled(true)
        }
    }

    return (<>
    <p>Votes:{vote} </p>
    <button onClick={() => handleVote(1)} disabled={upButtonDisabled}>Yay</button>
    <button onClick={() => handleVote(-1)} disabled={downButtonDisabled}>Nay</button>

    </>)
    
}

export default LikeButton