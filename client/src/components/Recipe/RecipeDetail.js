import { useDispatch, useSelector } from "react-redux";
import { useEffect, React } from "react";
import { getRecipeDetail, clearRecipe } from "../../actions/actions";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function RecipeDetail() {
  const dispatch = useDispatch();
  const recipeDetail = useSelector((state) => state.recipeDetail);
  const { id } = useParams();

  useEffect(() => {
    if(id!=="recipe") dispatch(getRecipeDetail(id))
    return () => {
      dispatch(clearRecipe())
    }
  }, [dispatch, id])

  function shorten(str, maxLen, separator = ' ') {
    maxLen = 1000;
    if (str.length <= maxLen) return str;
    return str.substr(0, str.lastIndexOf(separator, maxLen));
  }

  if (recipeDetail === null) {
    return (<h1>Receta no encontrada</h1>)
  } else if (recipeDetail === undefined) {
    return (<Loader/>)
  } else {
    return (
      <div className="detailRecipeContainer">
        <div className= "detailRecipe">
        <div className="data-resume">
                <span>Resume: </span>
                {recipeDetail[0].resume?<p>{shorten(recipeDetail[0].resume.replace(/(<([^>]+)>)/ig, ''))}</p>:<p>No hay Resumen</p>}
            </div>
          <div className="title">
            <h1>{recipeDetail[0].title}</h1>
          </div>
          <div className="data">
            <div className="data-type">
              <span>Type: </span>
              <h3>{recipeDetail[0].type}</h3>
            </div>
            <div className="data-diets">
              <span>Diets: </span>
              <h3>{recipeDetail[0].diets.join(", ")}</h3>
            </div>
            <div className="data-puntuation">
              <span>Puntuation: </span>
              <h5>{recipeDetail[0].puntuation}</h5>
            </div>
            <div className="data-health">
              <span>Health Score: </span>
              <h5>{recipeDetail[0].healthScore}</h5>
            </div>
          </div>
          <div className="data2">
              <span>Step By Step: </span>
              {recipeDetail[0].stepbystep?<p>{shorten(recipeDetail[0].stepbystep.replace(/(<([^>]+)>)/ig, ''))}</p>:<p>There is no step by step</p>}
          </div>
          <div className="image"></div>
            <img className="image" src={recipeDetail[0].img} alt="img detail"></img>
        </div>
      </div>
    );
  }
}

export default RecipeDetail;
