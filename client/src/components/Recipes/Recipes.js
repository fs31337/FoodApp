import React, { useState } from "react";
import Recipe from "../Recipe/Recipe";
import Pagination from "./Pagination";
import "./Recipes.scss";

function Recipes({ recipes }) {
  console.log(recipes)
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");
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
      <div className="Search-Filters">
        <div className="Search-Sort">
          <input
            type="text"
            className="search-input"
            placeholder="Search Recipe..."
            value={search}
            onChange={onSearchChange}
          />
          <div className="sort" key="sort">
            <button key="azButton" className="azButton" onClick={() => setSortType("az")}>
              Sort Name Asc
            </button>
            <button className="zaButton" key="zaButton" onClick={() => setSortType("za")}>
              Sort Name Desc
            </button>
            <button className="puntmintomax" key="puntmintomax" onClick={() => setSortType("puntmintomax")}>
              Sort Puntuation Asc
            </button>
            <button className="puntmaxtomin" key="puntmaxtomin" onClick={() => setSortType("puntmaxtomin")}>
              Sort Puntuation Desc
            </button>
          </div>
        </div>
        {/* Dietas */}
          <div className="Diets" key="Diets">
          <button className="vegetarian" key="vegetarian" onClick={() => setDietFilter(["vegetarian"])}>
            Vegetarian
          </button>
          <button className="vegan" key="vegan" onClick={() => setDietFilter(["vegan"])}>
            Vegan
          </button>
          <button className="primal" key="primal" onClick={() => setDietFilter(["primal"])}>
            Primal
          </button>
          <button className="gluten-free" key="gliten-free" onClick={() => setDietFilter(["gluten"])}>
            Gluten-Free
          </button>
          <button className="lacto-vegetarian" key="lacto-vegetarian" onClick={() => setDietFilter(["lacto"])}>
            Lacto-Veg
          </button>
          <button className="ovo-vegetarian" key="ovo-vegetarian" onClick={() => setDietFilter(["ovo"])}>
            Ovo-Veg
          </button>
          <button className="pescatarian" key="pescatarian" onClick={() => setDietFilter(["pescatarian"])}>
            Pescatarian
          </button>
          <button className="dairy free" key="dairy free" onClick={() => setDietFilter(["dairy"])}>
            Dairy Free
          </button>
          <button className="ketogenic" key="ketogenic" onClick={() => setDietFilter(["ketogenic"])}>
            Ketogenic
          </button>
          <button className="paleolithic" key="paleolithic" onClick={() => setDietFilter(["paleolithic"])}>
            Paleolithic
          </button>
          <button className="default" key="default" onClick={() => setDietFilter([])}>
            None
          </button>
        </div>
      </div>
      <div className="Recipes-Pagination">
        <div className="recipe-container" key="recipe-container">
            {Array.isArray(currentRecipes) ? (
              currentRecipes.map((recipe) => (
                <Recipe
                  title={recipe.title}
                  id={recipe.id}
                  img={recipe.img}
                  diet={recipe.diet}
                  key={recipe.id}
                />
              ))
            ) : (
              <h1>Cargando...</h1>
            )}
        </div>
        <Pagination
            recipesPerPage={recipesPerPage}
            totalRecipes={sorted.length}
            paginate={paginate}
          />
      </div>
    </div>
  );
}
export default Recipes;
