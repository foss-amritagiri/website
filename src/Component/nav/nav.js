import React from 'react'
import logo from '../../logo.svg'
import {Link, withRouter} from "react-router-dom"

const currentTab = (history, path) => {
    if(history.location.pathname === path){
        return {color: '#FFFFFF'}
    } else{
        return {color: "#d1d1d1"}
    }
}

const Nav =({history}) => (
    <div>
        <nav className="navbar navbar-light bg-dark ">
        <img src={logo} style={{width:"50px"}}/>
        <ul className="nav  bg-dark justify-content-end">
            <li className="nav-item">
                <Link style={currentTab(history, "/")} className="nav-link" to="/">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/about")} className="nav-link" to="/about">
                    About
                </Link>
        </li>
        </ul>
    </nav>
    </div>
)


export default withRouter(Nav)
