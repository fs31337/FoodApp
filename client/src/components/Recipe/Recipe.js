import React from 'react'
import {Link} from 'react-router-dom';
import "./Recipe.scss";

function Recipe({title,id,img,diet}) {
    return (
        <div className="recipe" key={id}>
            <img src={img} alt="imagen"></img>
            <div className="recipe-text">
                <Link className="recipe-text__link" to={`/recipes/${id}`}>{<h1>{title}</h1>}</Link>
                <div className="recipe-text__separador"></div>
                <h3>{diet.join(", ")}</h3>
            </div>
        </div>
    )
}
export default Recipe
