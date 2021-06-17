import React from "react";
import './Pagination.scss'

function pagination({ recipesPerPage, totalRecipes,paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="page-numbers">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={()=> paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default pagination;
