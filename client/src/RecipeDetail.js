import { useDispatch, useSelector } from "react-redux";
import { useEffect, React } from "react";
import { getRecipeDetail, clearRecipe } from "./actions";
import { useParams } from "react-router-dom";

function RecipeDetail() {
  const dispatch = useDispatch();
  const recipeDetail = useSelector((state) => state.recipeDetail);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRecipeDetail(id))
    return () => {
      dispatch(clearRecipe())
    }
  }, [dispatch, id])

  if (recipeDetail === null) {
    return (<h1>Receta no encontrada</h1>)
  } else if (recipeDetail === undefined) {
    return (<h1>Cargando...</h1>)
  } else {
    return (
      <div>
        <span>Nombre:</span>
        <span>{recipeDetail[0].title}</span>
      </div>
    );
  }

}

export default RecipeDetail;
