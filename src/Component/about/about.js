import React from 'react';
import Nav from '../nav/nav';
import Footer from '../home/footer'
import './about.css'


const People = ({
    Image="",
    Name="",
    About="",
    Facebook="",
    Twitter="",
    Github=""
}) => (
    <div className="col-md-3 py-2 mx-auto">
    <div class="people mx-auto">
    <img src={Image} className="w-100" alt="" />
    <div class="info">
      <h2>{Name}</h2>
      <p>{About}</p>
     <a href={Facebook} class="fa fa-facebook"></a>
      <a href={Twitter} class="fa fa-twitter"></a>
      <a href={Github} class="fa fa-github"></a>
    </div>
  </div>
  </div>
)

const about = () => (
    <div className="page-container">
    <Nav/>
    <div className="container-fluid jumbotron bg-light">
            <h1 className="text-center text-uppercase display-4">About us</h1>
            </div>
            <div className="container text-center">
                <h1 className="display-3">Meet The Team</h1>
                <p>“Individuals can and do make a difference, but it takes a team to really mess things up.”</p>
            <div className="row mx-auto d-flex align-items-center">
            <People 
                Image="https://agfoss.tech/imgs/team/aadhu.jpg"
                Name="Aadarsh"
                About="ML"
            />
            <People 
            Image="https://agfoss.tech/imgs/team/img2.jpeg"
            Name="Cat"
        />
        <People 
        Image="https://avatars1.githubusercontent.com/u/53054851?s=460&v=4"
        Name="Cat"
    />
            </div>
            </div>
     <Footer/>
     </div>
)

export default about