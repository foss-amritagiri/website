import React from 'react';
import Nav from '../nav/nav';
import Footer from '../home/footer'
import People from './people'
import './about.css'
import Aadarsh from '../../assets/team/aadarsh.jpg'
import Paresh from '../../assets/team/paresh.jpg'
import Srivatsan from '../../assets/team/srivatsan.jpg'


const Team = () => (
  <div className="container text-center">
                <h1 className="display-3">Meet The Team</h1>
                <p>"Teamwork is essential – it allows you to blame someone else."</p>
            <div className="container-fluid row m-0">
            <People 
                Image={Aadarsh}
                Name="Aadarsh"
                About="ML"
                Instagram="https://www.instagram.com/aadhufer/"
                Github="https://github.com/aadarshsg2000"
                Twitter="https://twitter.com/sg_aadarsh"
             />
            <People 
            Image={Paresh}
            Name="Paresh Mon"
            About="UI/UX and Front-end"
            Instagram="https://www.instagram.com/paresh_._/"
            Github="https://github.com/Elitepro6161"
            Twitter="https://twitter.com/PareshKenway"
            />
            <People 
                Image={Srivatsan}
                Name="Srivatsan"
                About="Full Stack Developer"
                Instagram="https://www.instagram.com/krypto.zip"
                Github="https://github.com/kryptocodes"
                Twitter="https://twitter.com/srivatsantb"
            />
            </div>
      </div>
)


const about = () => (
    <div className="page-container">
    <Nav/>
    <div className="container-fluid jumbotron text-center bg-light">
            <h1 className="text-center text-uppercase display-4">About us</h1>
            <p className="lead text-justify py-2 px-5">
            We're a group of students who are enthusiastic about the 
            open source movement and spread awareness about 
            Foss and programming in and around the campus.
            </p>
        </div>
            <Team/>      
     <Footer/>
     </div>
)

export default about