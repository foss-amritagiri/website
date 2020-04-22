import React from 'react';
import Nav from '../nav/nav';
import Footer from './footer';
import '../../index.css'

const Home = () => (
    <div>
    <Nav/>
    <div className="container-fluid py-1">
            <div className="jumbotron bg-dark text-white text-center">
                <h2 className="display-4">Hello world</h2>
                <p className="lead">this is Home</p>
            </div>
            <div className="jumbotron bg-dark text-white text-center">
                <h2 className="display-4">Hello world</h2>
                <p className="lead">this is Home</p>
            </div>
            <div className="jumbotron bg-dark text-white text-center">
                <h2 className="display-4">Hello world</h2>
                <p className="lead">this is Home</p>
            </div>
     </div>
     <Footer />
     </div>
)

export default Home