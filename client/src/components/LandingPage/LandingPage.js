import React from 'react';
import {Link} from 'react-router-dom';

function LandingPage() {
    return (

            <Link className="LandingPage" to={`/principal`}>
                 <button className="Receta">Busca una Receta</button>
                 <img alt="Imagen fondo 2"></img>
            </Link>
    )
}

export default LandingPage
