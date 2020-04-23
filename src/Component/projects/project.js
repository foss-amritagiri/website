import React from 'react';
import Nav from '../nav/nav';
import Footer from '../home/footer'
import FlipCard from "react-flip-cards";
import Team from '../../images/team.svg'
import 'react-flip-cards/build/index.css'

const Card1 = () => (
    <FlipCard 
        fontTitle="Amrita Repo"
        fontSubTitle="web application"
        backTitle="Amrita Repo"
        backText="A simple webapp for amritian"
        >
        <a href="https://github.com/">View on Github</a>
        </FlipCard>

)

export default function project() {
    return (
        <div className="page-container">
        <Nav/>
        <h1 className="text-center">Projects</h1>
        <div className="container py-1">
            <div className="row">
                <div className="col-md-4">
                <Card1/>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}