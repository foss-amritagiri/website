import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.css'
import Bg from '../../../assets/bg.jpg'
import Bg2 from '../../../assets/bg_1.jpg'
import Team from '../../../assets/item.jpg'


export default function carousel() {
    return (
        <div className="landing-page">
        <Carousel 
        showThumbs={false} 
        infiniteLoop={true} 
        autoPlay={true}
        showStatus={false} 
        dynamicHeight={true}
        showIndicators={false}
    >
        <div>
            <img src={Bg2} className="w-100" alt="img_1"/>
            <div className="carousel-caption">
                    <h1 className="display-2 carousel-caption text-white my-4">We work to build things</h1>
                </div>
        </div>
        <div>
        <img src={Bg} className="w-100" alt="img"/>
            <div className="carousel-caption">
                <h1 className="display-2 carousel-caption text-white  my-4">Sometimes break them too</h1>
            </div>
        </div>
        <div>
            <img src={Team} className="w-100" alt="img_2"/>
                <div className="carousel-caption">
                    <h1 className="display-2 carousel-caption text-white  my-4">We do <br/> What We Dream</h1>
                </div>
        </div>
    </Carousel>
        </div>
    )
}

