import { useDispatch, useSelector } from "react-redux";
import { useEffect, React } from "react";
import { getRecipeDetail, clearRecipe } from "../../actions/actions";
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
      <div className="detailRecipeContainer">
        <div className= "detailRecipe">
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
              <h3>{recipeDetail[0].diets}</h3>
            </div>
            <div className="data-puntuation">
              <span>Puntuation: </span>
              <h5>{recipeDetail[0].puntuation}</h5>
            </div>
            <div className="data-health">
              <span>Health Score: </span>
              <h5>{recipeDetail[0].healthScore}</h5>
            </div>
            <div className="data-resume">
                <span>Resume: </span>
                <p>{recipeDetail[0].resume.replace(/(<([^>]+)>)/ig, '')}</p>
            </div>
          </div>
          <div className="data2">
              <span>Step By Step: </span>
              <p>{recipeDetail[0].stepbystep.replace(/(<([^>]+)>)/ig, '')}</p>
          </div>
          <div className="image"></div>
            <img className="image" src={recipeDetail[0].img} alt="img detail"></img>
        </div>
      </div>
    );
  }
}

export default RecipeDetail;
