import React, { useState, useEffect } from "react";
import Recipe from "../Recipe/Recipe";
import Pagination from './Pagination';
import "./Recipes.css";

function Recipes({ recipes }) {
    // const [recipeList,setRecipesList] = useState(recipes);
    // const [loading,setLoading] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const [recipesPerPage,setRecipesPerPage] = useState(2);

    const indexOfLastRecipe = currentPage  * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe,indexOfLastRecipe);
    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="recipe-container">
      {Array.isArray(currentRecipes) ? (
        currentRecipes.map((recipe) => (
          <Recipe
            title={recipe.title}
            id={recipe.id}
            img={recipe.img}
            diet={recipe.diet}
          />
        ))
      ) : (
        <h1>Cargando...</h1>
      )}
      <Pagination recipesPerPage={recipesPerPage} totalRecipes={recipes.length} paginate={paginate}/>
    </div>
  );
}
export default Recipes;
