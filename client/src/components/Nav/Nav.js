import React from 'react'
import LogoButton from './LogoButton'
import CreateButton from './CreateButton'
import './Nav.scss'

function Nav() {
    return (
        <nav className="navbar">
            <LogoButton/>
            <CreateButton/>
        </nav>
    )
}

export default Nav
