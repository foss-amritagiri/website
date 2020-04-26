import React from 'react'
import Nav from '../nav/nav'
import Footer from './footer'
import Abouttheclub from './abouttheclub'
import Carousel from './carousel/carousel'
import Events from './events/event'


import '../../index.css'


const Home = () => (
    <div className="page-container">
    <Nav/>
    <div className="bg-wrapper">
    <Carousel/>
    </div>
    <div className="mx-auto">
    <Abouttheclub/> 
    <Events/>
    </div>
     <Footer />
     </div>
     
)

export default Home