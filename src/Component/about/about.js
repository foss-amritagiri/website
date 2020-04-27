import React from 'react';
import Nav from '../nav/nav';
import Footer from '../home/footer'
import './about.css'

const about = () => (
    <div className="page-container">
    <Nav/>
    <div className="container-fluid jumbotron bg-light">
            <h1 className="text-center text-uppercase display-4">About us</h1>
            </div>
            <div className="container">
                <h1 className="display-3">Profile</h1>
            </div>
     <Footer/>
     </div>
)

export default about