import React from 'react';
import Nav from '../nav/nav';
import Members from './members';
import Footer from '../home/footer'
import './about.css'



const about = () => (
    <div className="page-container">
    <Nav/>
    <div className="container-fluid jumbotron text-center bg-light">
            <h2 className="text-center text-uppercase display-4">About us</h2>
            <p className="lead text-justify py-2 px-5">
            We're a group of students who are enthusiastic about the 
            open source movement and spread awareness about 
            Foss and programming in and around the campus.
            </p>
        </div>
        <div className="container text-center">
            <h2 className="display-3">Meet The Team</h2>
                 <p>"Teamwork is essential – it allows you to blame someone else."</p>
             <Members/>
            </div>
     <Footer/>
     </div>
)

export default about