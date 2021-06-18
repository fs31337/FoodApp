import { useDispatch, useSelector } from "react-redux";
import { React, useEffect } from "react";
import getAllRecipes from "../../actions/actions";
import "./Home.scss";
import Recipes from "../Recipes/Recipes";
import Loader from "../Loader/Loader";

export default function Home() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  return Array.isArray(recipes) ? (
    <div className="recipes-container">
      <Recipes recipes={recipes} />
    </div>
  ) : (
    <Loader/>
  );
}
