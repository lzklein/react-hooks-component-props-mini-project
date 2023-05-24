import React from "react";

function Article({title, date, preview}){
    console.log(title,date,preview);
    function placeholderDate(date){
        if(!date){
            return "January 1, 1970"
        }
        else{
            return date
        }
    }
    const articleDate = placeholderDate(date)
    return(
        <article>
            {console.log(title)}
            <h3>{title}</h3>
            {console.log(articleDate)}
            <small>{articleDate}</small>
            {console.log(preview)}
            <p>{preview}</p>
        </article>
    )
}

export default Article;