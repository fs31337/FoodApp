import axios from "axios"
import { SET_RECIPES,SET_RECIPE_DETAIL } from "./actionsNames";

 export default function getAllRecipes() {
    return (dispatch) => {                 //dispatch porque es una funcion asyncrona en una action (ver clase REDUX async actions)
        axios.get('http://localhost:3001/principal')
        .then(response =>{
            dispatch({type: SET_RECIPES, payload:response.data})
        })
    }
}

 export function getRecipeDetail(id) {
    return (dispatch) => {                 //dispatch porque es una funcion asyncrona en una action (ver clase REDUX async actions)
        axios.get(`http://localhost:3001/recipeId/${id}`)
        .then(response =>{
            dispatch({type: SET_RECIPE_DETAIL, payload:response.data})
        }).catch((error)=> {
            if(error.response?.status !== 404) alert("No se encontro el detalle del Id")
            dispatch({ type: SET_RECIPE_DETAIL, payload:null})
        })
    }
}

 export function clearRecipe() {
    return {
            type: SET_RECIPE_DETAIL, payload:undefined //Lo uso para limpiar el detalle cuando se desmonte.
        }
}
