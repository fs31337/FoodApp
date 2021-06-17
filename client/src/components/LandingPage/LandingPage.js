import React from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.scss';

function LandingPage() {
    return (
            <div className="LandingPage">
                <Link  to={`/principal`} >
                    <button className="Receta">Busca una Receta</button>
                </Link>
            </div>
    )
}

export default LandingPage
