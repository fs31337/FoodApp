import React, { useState, useEffect } from "react";
import Recipe from "../Recipe/Recipe";
import Pagination from "./Pagination";
import "./Recipes.css";

function Recipes({ recipes }) {
  // const [recipeList,setRecipesList] = useState(recipes);
  // const [loading,setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(2);
  const [search, setSearch] = useState("");

  //SearchFilter
  function filteredRecipes(recipes) {
    if(search.length === 0){
       return recipes
    }
    const filtered = recipes.filter(recipe => recipe.title.toLowerCase().includes(search.toLowerCase()));
    return filtered;
  };
  const onSearchChange = (e) => {
    setCurrentPage(1);
    setSearch(e.target.value)
  }
  //Paginate
  console.log(filteredRecipes(recipes),"filtered recipessss")
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes(recipes).slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  ); //slice de recipes antes
  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="recipe-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search Recipe..."
        value={search}
        onChange={onSearchChange}
      />
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
      <Pagination
        recipesPerPage={recipesPerPage}
        totalRecipes={recipes.length}
        paginate={paginate}
      />
    </div>
  );
}
export default Recipes;
