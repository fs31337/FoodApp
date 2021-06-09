import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {SET_RECIPE} from './actionsNames';
//SEPARAR REDUCER Y STATEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE--------------------------------------------

const initialState = {
    recipes: undefined,
}

function reducer(state = initialState, action){
    switch (action.type){
        case SET_RECIPE:{
            return {
                ...state,
                recipes:action.payload
            }
        }
        default: {
            return state
        }
    }
}

const store = createStore(reducer,applyMiddleware(thunk));
export default store;