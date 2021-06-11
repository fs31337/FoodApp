import React from 'react'
import {Link} from 'react-router-dom';
import "./Recipe.css";

function Recipe({title,id,img,diet}) {
    return (
        <div className="recipe" key={id}>
            <img src={img} alt="imagen"></img>
            <Link to={`/recipes/${id}`}>{<h1>{title}</h1>}</Link>
            <h3>{diet}</h3>
        </div>
    )
}

export default Recipe
