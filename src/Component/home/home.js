import React from 'react'
import Nav from '../nav/nav'
import Footer from './footer'
import Carousel from './carousel/carousel'
import Events from './events/event'

import '../../index.css'


const Home = () => (
    <div className="page-container">
    <Nav/>
    <div className="container-fluid">    
    <Carousel/>
    <Events/>
    </div>
     <Footer />
     </div>
     
)

export default Home