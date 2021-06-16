import React from 'react'
import {Link} from 'react-router-dom';
import "./Recipe.scss";

function Recipe({title,id,img,diet}) {
    return (
        <div className="recipe" key={id}>
            <img src={img} alt="imagen"></img>
            <Link className="link" to={`/recipes/${id}`}>{<h1>{title}</h1>}</Link>
            <div className="separador"></div>
            <h3>{diet}</h3>
        </div>
    )
}
export default Recipe
