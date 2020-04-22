import React from 'react';
import Nav from '../nav/nav';
import Footer from './footer';
import '../../index.css'
import place from '../../images/place.svg'

const Home = () => (
    <div className="page-container">
    <Nav/>
    <div className="container-fluid py-auto">
        <div className="place pull-right align-centre">
            <img src={place} className="w-50" alt="place"/>
        </div>

     </div>
     <Footer />
     </div>
     
)

export default Home