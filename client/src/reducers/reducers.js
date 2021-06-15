import {SET_RECIPES, SET_RECIPE_DETAIL,SET_CLEAR_RECIPE_RESPONSE,SET_CREATE_RECIPE_RESPONSE} from '../actions/actionsNames';

const initialState = {
    recipes: undefined,
    recipeDetail: undefined,
    createRecipeResponse: undefined,
}
function reducer(state = initialState, action){
    switch (action.type){
        case SET_RECIPES:{
            return {
                ...state,
                recipes:action.payload
            }
        }
        case SET_RECIPE_DETAIL:{
            return {
                ...state,
                recipeDetail: action.payload
            }
        }
        case SET_CLEAR_RECIPE_RESPONSE:{
            return {
                recipeDetail: undefined
            }
        }
        case SET_CREATE_RECIPE_RESPONSE:{
            return {
                ...state,
                createRecipeResponse: action.payload
            }
        }
        default: {
            return state
        }
    }
}
export default reducer;