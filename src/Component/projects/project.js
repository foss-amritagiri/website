import React from 'react'
import Nav from '../nav/nav'
import Footer from '../home/footer'
import FlipCard from "react-flip-cards"
import 'react-flip-cards/build/index.css'
import './project.css'

const Card1 = () => (
    <FlipCard 
        fontTitle="Amrita Repo"
        fontSubTitle="web application"
        backTitle="Amrita Repo"
        backText="A simple webapp to view Timetable and track syllabus"
        >
        <a href="https://github.com/kryptocodes/amrita_repo" alt="AmritaRepo">View on Github</a>
        </FlipCard>

)
const Card2 = () => (
    <FlipCard 
        fontTitle="GPMS"
        fontSubTitle="Gate pass management system"
        backTitle="GPMS"
        backText="A GPMS portal to apply gate pass"
        >
        <a href="https://github.com/kryptocodes/GPMS_backend" alt="GPMS">View on Github</a>
        </FlipCard>

)

export default function project() {
    return (
        
        <div className="page-container">
        <Nav/>
        <div className="jumbotron">
        <h2 className="display-4 text-center text-uppercase">Projects</h2>
        <p className="lead text-center py-1">A curated collection of open source projects which are contributed and maintained by foss members</p>
        </div>
        <div className="container">
            <div className="row p-1">
                <div className="col-9 col-md-4 mx-auto p-2">
                <Card1/>
                </div>
                <div className="col-9 col-md-4 mx-auto p-2">
                <Card2/>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}