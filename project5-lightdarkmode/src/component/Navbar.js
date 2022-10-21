import React from 'react'

export default function Navbar(props){
    

    return(
        <nav className={props.lightMode ? "light": ""}>
            <img src='./Group.png' width="28.93px" height="28.93px" className='nav-logo'></img>
            <h2 className='nav-title'>ReactFacts</h2>
            <div className="toggler">
                <p className='light-toggler'>Light</p>
                <div className="toggler--slider" onClick={props.togglelightMode}>
                <div className="toggler--slider--circle"></div>
                </div>
                <p className='dark-toggler'>Dark</p>
            </div>
        </nav>
    )
}