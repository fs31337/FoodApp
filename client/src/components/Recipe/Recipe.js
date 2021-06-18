import React from 'react'
import {Link} from 'react-router-dom';
import "./Recipe.scss";

function Recipe({title,id,img,diet}) {
    return (
        <Link className="recipe" to={`/recipes/${id}`}>
            <div className="recipe" key={id}>
                <img src={img} alt="imagen"></img>
                <div className="recipe-text">
                    <h1>{title}</h1>
                    <div className="recipe-text__separador"></div>
                    <h3>{diet.join(", ")}</h3>
                </div>
            </div>
        </Link>
    )
}
export default Recipe
