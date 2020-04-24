import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.css'
import Team from '../../../images/item.png' 

export default function carousel() {
    return (
        <div>
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
                    <h1 className="carousel-caption text-white">What do we do?</h1>
                    <button type="button" className="btn btn-warning btn-lg">More</button>
                </div>
        </div>
        <div>
            <img src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="w-100" />
            <div className="carousel-caption">
                    <h1 className="carousel-caption text-white">What do we do?</h1>
                    <button type="button" className="btn btn-warning btn-lg">More</button>
                </div>
        </div>
    </Carousel>
        </div>
    )
}

