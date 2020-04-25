import React from 'react'
import './events.css'
import Hacktober from '../../../images/hacktober.png' 
import Talk from '../../../images/talk.jpg' 

export default function event() {
    return (
        <div className="events">
            <div className="jumbotron bg-secondary text-white">
            <h1 className="display-md-4 text-white ">Recent Events</h1>
                    <div className="row m-0 points my-4">
                    <div className="col-md-3 p-2 d-flex  align-items-center mx-auto">
                        <div class="card bg-dark text-white">
                        <img  className="w-100 image" src={Hacktober} alt="hacktoberfest"/>
                        <div class="card-img-overlay">
                        <h2 class="card-title">Hacktoberfest</h2>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-2 d-flex  align-items-center mx-auto">
                        <div class="card bg-dark text-white">
                        <img  className="w-100 image" src={Talk} alt="hacktoberfest"/>
                        <div class="card-img-overlay">
                        <h5 class="card-title">Hacktoberfest</h5>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-2 d-flex  align-items-center mx-auto">
                        <div class="card bg-dark text-white">
                        <img  className="w-100 image" src={Hacktober} alt="hacktoberfest"/>
                        <div class="card-img-overlay">
                        <h5 class="card-title">Hacktoberfest</h5>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
            </div>
    )
}
