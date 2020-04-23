import React from 'react'
import './events.css'

export default function event() {
    return (
        <div className="events">
            <div className="jumbotron bg-secondary text-white">
            <h1 className="text-white">Recent Events</h1>
                    <div className="row">
                    <div className="col-md-6">
                    <div className="card text-white">
                        <img className="card-img" src="https://jenkins.io/images/hacktoberfest/2019_social.png" alt="Card image"/>
                                <div className="card-img-overlay">
                                <h5 class="card-title">Hacktoberfest</h5>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-6 content">
                        <h1>Hacktoberfest</h1>
                        <p>Hacktoberfest is an online competition of sorts where participants 
                        have to perform at least 5 pull requests on GitHub repositories of other people
                         that let people do so.When a participant manages to finish making 5 PRs, 
                         they are selected by the organisers to receive a congratulatory T-shirt,
                          this is done on the basis of availability of T-shirts.
                           Hacktoberfest was organised by Digital Ocean and
                            sponsored by Dev.to in collaboration with GitHub
                        </p>
                        </div>
                        </div>
                    </div>
            </div>
    )
}
