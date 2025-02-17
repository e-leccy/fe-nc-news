import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

function ArticleList() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getArticles().then((result) => {
            setArticles(result)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <>
        <ul>
            {articles.map((article) => {
                return <li>
                    <ArticleCard article={article}/>
                </li>
            })}
        </ul>
        
        </>
    )
}

export default ArticleList