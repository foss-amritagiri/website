import React from 'react';
import Nav from '../nav/nav';
import Footer from '../home/footer'
import Team from '../../images/team.png'

const about = () => (
    <div className="page-container">
    <Nav/>
    <div className="container-fluid jumbotron bg-light">
            <h1 className="text-center text-uppercase display-4">About us</h1>
            <div className="row m-0">
                <div className="col-xl-6 order-xl-2 order-lg-1 d-flex align-items-center text-md-left">
                <img src={Team} className="w-100" alt="team"/>
                </div>
                <div className="col-xl-6 order-xl-2 order-lg-1 d-flex align-items-center">
                <p className="lead">FOSS@Amritagiri is the open source club.It is a volunteer driven club that focuses on free and open source software (FOSS), open standards, open technologies, and open content. 
                The goal of this society is to promote awareness, usage, and development of FOSS.
                </p>
                </div>
                </div>
                <div className="row m-0">
                <div className="col-xl-6 mt-4 order-md-2">
                
                </div>
                <div className="col-xl-6 order-xl-1 order-lg-1 d-flex align-items-center">
                <p className="lead"><h1 className="text-center text-md-left display-4">Why Foss?</h1>What is FOSS?
                FOSS is a matter of the User’s freedom to run, copy, distribute, study, change and improve the software. 
                The “free” as is used in Free and Open Source Softwares refers to ‘free as in freedom’ rather cost.
                More precisely it refers to four kinds of freedom to the user’s of the Software The freedom to improve the program,
                 and release your improvements (and modified versions in general) to the public, so that the whole community benefits.</p>
                </div>
            </div>
            </div>
            <div className="container">
                <h1 className="display-3">Profile</h1>
            </div>
     <Footer/>
     </div>
)

export default about