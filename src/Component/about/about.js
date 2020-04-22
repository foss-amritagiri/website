import React from 'react';
import Nav from '../nav/nav';
import Footer from '../home/footer'
import team from "../../images/team.svg"

const about = () => (
    <div>
    <Nav/>
    <div className="container-fluid py-1">
        <h1 className="text-center text-uppercase py-2">About us</h1>
        <div className="row">
            <div className="col-md-3 px-3 mx-auto">
                <img src={team} className="w-75 px-3" alt=""/>
            </div>
            <div className="col-md-5 py-2 mx-auto ">
            <div className="alert alert-success text-md-left" role="alert">
                <p>FOSS@Amritagiri is the open source club.It is a volunteer driven club that focuses on free and open source software (FOSS), open standards, open technologies, and open content. 
                The goal of this society is to promote awareness, usage, and development of FOSS.
                </p>
            </div>
        </div>
        </div>
     </div>
     <Footer/>
     </div>
)

export default about