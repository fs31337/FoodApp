import React from 'react'
import Recipe from './Recipe';
import "./Recipes.css";
function Recipes({recipes}) {
    return (
         <div className="recipe-container">
            {
            Array.isArray(recipes) ? recipes.map(recipe => ( <Recipe title={recipe.title} id={recipe.id} img={recipe.img} diet={recipe.diet}/>)): <h1>Cargando...</h1>
            }
        </div>
    )
}
export default Recipes
