import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

function ArticleList() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles().then((result) => {
            setArticles(result)
        })
    }, [])
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