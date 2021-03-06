import axios from "axios"
import { SET_RECIPES,SET_RECIPE_DETAIL} from "./actionsNames";

 export default function getAllRecipes() {
    return (dispatch) => {
        axios.get('https://foodappar.herokuapp.com/recipes')
        .then(response =>{
            dispatch({type: SET_RECIPES, payload:response.data})
        })
    }
}

 export function getRecipeDetail(id) {
    return (dispatch) => {
        axios.get(`https://foodappar.herokuapp.com/recipes/${id}`)
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
