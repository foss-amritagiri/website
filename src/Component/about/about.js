import React from 'react';
import Nav from '../nav/nav';
import Footer from '../home/footer'

const about = () => (
    <div>
    <Nav/>
    <div className="container-fluid py-1">
            <div className="jumbotron bg-dark text-white text-center">
                <h2 className="display-4">Hello world</h2>
                <p className="lead">this is about page</p>
            </div>
     </div>
     <Footer/>
     </div>
)

export default about