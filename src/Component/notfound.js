import React from 'react';
import Nav from './nav/nav'
import Footer from './home/footer'

const notfound = () => (
    <div className="page-container">
    <Nav/>
    <div className="container-fluid">
            <div className="jumbotron bg-dark text-white text-center">
                <h2 className="display-4">oops this pages doesn't exist</h2>
                <p className="lead">404 page not found</p>
            </div>
     </div>
     <Footer/>
     </div>
)

export default notfound