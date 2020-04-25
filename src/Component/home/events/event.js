import React from 'react'
import Poster from './poster'
import './events.css'
import Hacktober from '../../../images/hacktober.png' 
import Talk from '../../../images/talk.png'
import Tech from '../../../images/tech.png' 

export default function event() {
    return (
        <div className="events">
            <div className="jumbotron bg-transparent">
            <h1 className="display-3 text-center">Events</h1>
                    <div className="row m-0 points my-4">
                    <div className="col-md-3 p-2 d-flex  align-items-center mx-auto">
                    <Poster Image={Hacktober} Title="Hacktoberfest"/>
                    </div>
                    <div className="col-md-3 p-2 d-flex  align-items-center mx-auto">
                    <Poster Image={Talk} Title="FOSS Talk"/>
                    </div>
                    <div className="col-md-3 p-2 d-flex  align-items-center mx-auto">
                    <Poster Image={Tech} Title="TechTrovia"/>
                    </div>
                    </div>
                    </div>
            </div>
    )
}
