import {SET_RECIPES, SET_RECIPE_DETAIL} from '../actions/actionsNames';
//SEPARAR REDUCER Y STATEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE--------------------------------------------

const initialState = {
    recipes: undefined,
    recipeDetail: undefined,
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
        default: {
            return state
        }
    }
}
export default reducer;