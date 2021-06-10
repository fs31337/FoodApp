import { useDispatch,useSelector }  from 'react-redux';
import { useEffect,React } from 'react';
import { getRecipeDetail, clearRecipe } from './actions';
import { useParams } from "react-router-dom"



function RecipeDetail() {
    const dispatch = useDispatch();
    const recipeDetail = useSelector(state => state.recipeDetail);
    const {id} = useParams();

    useEffect(() =>{
        dispatch(getRecipeDetail(id))
        return() => {
            dispatch(clearRecipe())
        }
    },[dispatch,id])
    return (
        <div>
        {recipeDetail ===undefined && <h1>Cargando...</h1>}
        {typeof recipeDetail === 'object' && (<div>
            <span>Nombre:</span>
            <span>{recipeDetail[0].title}</span>
        </div>) }
        </div>
    )
}

export default RecipeDetail
