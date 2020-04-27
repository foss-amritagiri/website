import React from 'react'
import Poster from './poster'
import './events.css'
import Hacktober from '../../../images/hacktober.jpg' 
import Talk from '../../../images/talk.jpg'
import Tech from '../../../images/tech.jpg' 

export default function event() {
    return (
        <div className="events">
            <div className="container jumbotron bg-transparent">
            <h1 className="display-3 text-center">Events</h1>
                    <div className="row m-0 my-4">
                    <div className="col-md-3 p-2 d-flex  align-items-center mx-auto">
                    <Poster 
                        Image={Hacktober} 
                        Date="18th Oct" 
                        Title="Hacktoberfest"
                        Description="Hacktoberfest is a month-long celebration of 
                        open source software run by DigitalOcean and DEV"
                        />
                    </div>
                    <div className="col-md-3 p-2 d-flex  align-items-center mx-auto">
                    <Poster 
                        Image={Talk} 
                        Date="TBA" 
                        Title="FOSS Talk"
                        Description=""
                        />
                    </div>
                    <div className="col-md-3 p-2 d-flex  align-items-center mx-auto">
                    <Poster 
                        Image={Tech} 
                        Date="TBA" 
                        Title="TechTrovia"
                        Description="AGFOSS brings to you its series of Tech Quiz"
                        />
                    </div>
                    </div>
                    </div>
            </div>
    )
}
