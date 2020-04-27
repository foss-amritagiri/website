import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.css'
import Bg from '../../../images/bg_1.jpg'
import Team from '../../../images/item.jpg'

export default function carousel() {
    return (
        <div className="landing-page">
        <Carousel 
        showThumbs={false} 
        infiniteLoop={true} 
        autoPlay={true}
        showStatus={false} 
        showIndicators={false}
    >
        <div>
            <img src={Team} alt="img"/>
                <div className="carousel-caption">
                    <h1 className="carousel-caption text-white text-uppercase my-4">We do <br/> What we dream</h1>
                </div>
        </div>
        <div>
            <img src={Bg} className="w-100" alt="img_1"/>
            <div className="carousel-caption">
                    <h1 className="carousel-caption text-white">Because Open Source <br/>is the Future</h1>
                    <button type="button" className="btn btn-warning btn-lg d-none">More</button>
                </div>
        </div>
    </Carousel>
        </div>
    )
}

