import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    console.log(posts)
    function articlesArray(posts){
        return posts.map((postObj) => {
            return <Article title={postObj.title} date={postObj.date} preview ={postObj.preview}key={postObj.id}/>
        })
    }
    return(
        <main>
            {articlesArray(posts)}
        </main>
    )
        
}

export default ArticleList;