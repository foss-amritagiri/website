import React from 'react';
import Nav from './nav/nav'
import Footer from './home/footer'

import {Link} from "react-router-dom"

import NotFound from '../assets/notfound.svg'


const notfound = () => (
    <div className="page-container">
    <Nav/>
    <div className="container">
            <div className="jumbotron bg-transparent text-center">
                <img src={NotFound} className="w-100" alt="Not_found"/>
                <h2 className="display-4">oops this pages doesn't exist</h2>
                <Link to="/"><p className="lead">Home</p></Link>
            </div>
     </div>
     <Footer/>
     </div>
)

export default notfound