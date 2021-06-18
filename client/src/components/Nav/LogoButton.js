import React from 'react'
import {Link} from 'react-router-dom';
import './Nav.scss'

function LogoButton() {
    return (
        <div>
            <Link to={`/recipes`} className="foods-Button">{<h1>Foods</h1>}</Link>
        </div>
    )
}

export default LogoButton
