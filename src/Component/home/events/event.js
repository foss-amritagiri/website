import React from 'react'
import Poster from './poster'
import './events.css'
import Hacktober from '../../../assets/hacktober.jpg' 
import Talk from '../../../assets/talk.jpg'
import Tech from '../../../assets/tech.jpg' 

export default function event() {
    return (
        <div className="events">
            <div className="container jumbotron bg-transparent">
            <h3 className="display-3 text-center">Events</h3>
                    <div className="row m-0 my-4 mx-4">
                    <div className="col-md-3 p-2 d-flex  align-items-center mx-auto">
                    <Poster 
                        Image={Hacktober} 
                        Date="18th Oct" 
                        Title="Hacktoberfest"
                        Description="Support open source and earn a limited edition T-shirt!"
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
