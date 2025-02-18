import { useState, useEffect } from "react"
import { updateArticle } from "../utils/api"

function LikeButton ({article}) {

    const [vote, setVote] = useState(article.votes)
    const [upButtonDisabled, setUpButtonDisabled] = useState(false)
    const [downButtonDisabled, setDownButtonDisabled] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)

    function handleVote(voteChange){
        const originalVote = vote
        setVote((currentVote) => currentVote + voteChange)
        updateArticle(article.article_id, voteChange)
        .then(() => {
         if (voteChange === 1){
            setUpButtonDisabled(true)
        } else {
            setDownButtonDisabled(true)
        }
        setErrorMsg(false)
        }).catch((error) => {
        setVote(originalVote)
        setErrorMsg(true)
        })
        
    }

    return (<>
    <p>Votes:{vote} </p>
    <button onClick={() => handleVote(1)} disabled={upButtonDisabled}>Yay</button>
    <button onClick={() => handleVote(-1)} disabled={downButtonDisabled}>Nay</button>

    {errorMsg ? (<p>Vote not counted!</p>) : null}

    </>)
    
}

export default LikeButton