import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.css'
import { Carousel } from 'react-responsive-carousel';
 
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
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="w-100" alt="img"/>
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
        <div>
            <img src="https://imagekit.io/static/img/newPages/homepage-wave-bg.svg" />
            <div className="carousel-caption">
                    <h1 className="carousel-caption text-white">don't click the button</h1>
                    <button type="button" className="btn btn-warning btn-lg">More</button>
            </div>
        </div>
    </Carousel>
        </div>
    )
}

