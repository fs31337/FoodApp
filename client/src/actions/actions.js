import axios from "axios"
import { SET_RECIPES,SET_RECIPE_DETAIL, SET_CLEAR_RECIPE_RESPONSE,SET_CREATE_RECIPE_RESPONSE} from "./actionsNames";

 export default function getAllRecipes() {
    return (dispatch) => {
        axios.get('http://localhost:3001/principal')
        .then(response =>{
            dispatch({type: SET_RECIPES, payload:response.data})
        })
    }
}

 export function getRecipeDetail(id) {
    return (dispatch) => {
        axios.get(`http://localhost:3001/recipeId/${id}`)
        .then(response =>{
            dispatch({type: SET_RECIPE_DETAIL, payload:response.data})
        }).catch((error)=> {
            if(error.response?.status !== 404) alert("No se encontro el detalle del Id")
            dispatch({ type: SET_RECIPE_DETAIL, payload:null})
        })
    }
}

 export function createRecipe(form) {
    return (dispatch) => {
        axios.post("http://localhost:3001/recipe",form)
        .then(response =>{
            dispatch({type: SET_CREATE_RECIPE_RESPONSE, payload:response.data})
        })
    }
}

 export function clearRecipeResponse() {
    return   {
            type: SET_CLEAR_RECIPE_RESPONSE, payload:undefined
        }
    }

 export function clearRecipe() {
    return {
            type: SET_RECIPE_DETAIL, payload:undefined //Lo uso para limpiar el detalle cuando se desmonte.
        }
}
