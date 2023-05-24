import React from "react";

function About(props){
    function imageCheck(image){
        if(!image){
            return 'https://via.placeholder.com/215'
        }
        else{
            return image
        }
    }
    const backupImage = imageCheck(props.image);
    return(
        <aside>
            <img src={backupImage} alt="blog logo"></img>
            <p>{props.about}</p>
        </aside>
    )
}

export default About;