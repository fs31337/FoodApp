import { useDispatch,useSelector }  from 'react-redux';
import { React, useEffect } from 'react';
import getAllRecipes  from '../actions/actions.js';
// import {Link} from 'react-router-dom';
import Recipes from './Recipes';


export default function Home() {
    const dispatch = useDispatch();
    const recipes = useSelector(state => state.recipes)

    useEffect(() =>{
        dispatch(getAllRecipes())
    },[dispatch])
    return (
            Array.isArray(recipes) ? <Recipes recipes={recipes}/> : <h1>Cargando...</h1>
        )
}

