import React from 'react'
import '../../style.css'
import logo from '../../logo.svg'
import {Link, withRouter} from "react-router-dom"


const currentTab = (history, path) => {
    if(history.location.pathname === path){
        return {color: '#FFC107'}
    } else{
        return {color: "#FFFFFF"}
    }
}

const Nav = ({history}) => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <img className="App-logo" src={logo} style={{width:"50px"}}/>
        <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="nav navbar-nav">
            <li className="nav-item">
                <Link style={currentTab(history, "/")} className="nav-link" to="/">
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/project")} className="nav-link" to="/project">
                Project
                </Link>
            </li>
            <li className="nav-item">
                <Link style={currentTab(history, "/about")} className="nav-link" to="/about">
                    About
                </Link>
            </li>
             
        </ul>
        </div>  
    </nav>
    </div>
)



export default withRouter(Nav)
