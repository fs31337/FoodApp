import React, { useState } from "react";
import Recipe from "../Recipe/Recipe";
import Pagination from "./Pagination";
import "./Recipes.scss";

function Recipes({ recipes }) {
  // const [recipeList,setRecipesList] = useState(recipes);
  // const [loading,setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(2);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("az");
  const [dietFilter, setDietFilter] = useState([]);

  //SearchFilter

  function filteredRecipes(recipes) {
    if (search.length === 0) {
      return recipes;
    } else {
      const filtered = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(search.toLowerCase())
      );
      return filtered;
    }
  }
  const onSearchChange = (e) => {
    setCurrentPage(1);
    setSearch(e.target.value);
  };

  //DietFilter
  function filteredbyDiet(recipes) {
    if (dietFilter.length < 1) {
      return recipes;
    } else {
      const filtered = recipes.filter(
        (recipe) =>
          recipe.diet
            .join(" ")
            .split(" ")
            .some((type) => dietFilter.includes(type)) === true
      );
      return filtered;
    }
  }

  //Sort
  const sorted = filteredbyDiet(recipes).sort((a, b) => {
    if (sortType === "az" || sortType === "za") {
      const isSorted = sortType === "az" ? 1 : -1;
      return isSorted * a.title.localeCompare(b.title);
    } else if (sortType === "puntmaxtomin" || sortType === "puntmintomax") {
      const isSorted = sortType === "puntmintomax" ? 1 : -1;
      return (
        isSorted *
        a.puntuation.toString().localeCompare(b.puntuation.toString())
      );
    }
  });

  //Paginate
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes(sorted).slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="HomePage">
      <input
        type="text"
        className="search-input"
        placeholder="Search Recipe..."
        value={search}
        onChange={onSearchChange}
      />
      <button className="azButton" onClick={() => setSortType("az")}>
        Sort Name Asc
      </button>
      <button className="zaButton" onClick={() => setSortType("za")}>
        Sort Name Desc
      </button>
      <button className="puntmintomax" onClick={() => setSortType("puntmintomax")}>
        Sort Puntuation Asc
      </button>
      <button className="puntmaxtomin" onClick={() => setSortType("puntmaxtomin")}>
        Sort Puntuation Desc
      </button>
      {/* Dietas */}
      <button className="vegetarian" onClick={() => setDietFilter(["vegetarian"])}>
        Vegetarian
      </button>
      <button className="vegan" onClick={() => setDietFilter(["vegan"])}>
        Vegan
      </button>
      <button className="primal" onClick={() => setDietFilter(["primal"])}>
        Primal
      </button>
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
      </div>
      <Pagination
        recipesPerPage={recipesPerPage}
        totalRecipes={recipes.length}
        paginate={paginate}
      />
    </div>
  );
}
export default Recipes;
