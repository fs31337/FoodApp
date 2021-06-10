import { useDispatch,useSelector }  from 'react-redux';
import { useEffect } from 'react';
import { getAllRecipes } from './actions';
import {Link} from 'react-router-dom'


import React from 'react'

export default function Home() {
    const dispatch = useDispatch();
    const recipes = useSelector(state => state.recipes)

    useEffect(() =>{
        dispatch(getAllRecipes())
    },[dispatch])

    return (
        <div>
            <ul>
                {
                    Array.isArray(recipes) ? recipes.map(recipe => (
                        <li key={recipe.id}>
                            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                        </li>
                    )): <h1>Cargando...</h1>
                }
            </ul>
        </div>
    )
}
