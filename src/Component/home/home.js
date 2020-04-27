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
    <Carousel/>
    <Abouttheclub/> 
    <Events/>
     <Footer />
     </div>
     
)

export default Home