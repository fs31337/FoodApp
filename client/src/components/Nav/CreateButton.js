import React from 'react'
import {Link} from 'react-router-dom';
import './Nav.scss'

function CreateButton() {
    return (
        <div>
            <Link to={`/recipe`} className="create-Recipe">{<h1>Create Recipe</h1>}</Link>
        </div>
    )
}
export default CreateButton
