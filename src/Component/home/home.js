import React from 'react'
import Nav from '../nav/nav'
import Footer from './footer'
import Things from './things'
import Carousel from './carousel/carousel'
import Events from './events/event'

import '../../index.css'


const Home = () => (
    <div className="page-container">
    <Nav/>
    <Carousel/>
    <div className="mx-auto"> 
    <Things/>
    <Events/>
    </div>
     <Footer />
     </div>
     
)

export default Home