import React from 'react'
import Amrita_logo from '../../assets/amrita_logo.png'
import {Link} from 'react-router-dom'


const FooterNav = () => (
    <footer className="footer text-center text-md-left pt-2 bg-custom">
    <div className="container-fluid">
      <div className="row space">
            <div className="col-md-2 mx-auto">
                <h5 className="text-uppercase font-weight-bold mb-4">The Club</h5>
                 <ul className="list-unstyled">
                    <li>
                      <a href="https://blog.agfoss.tech/" alt="Blog">Blog</a>
                    </li>
                    <li>
                      <Link to='/workshop'>Workshop</Link>
                    </li>
                    <li>
                        <a href="https://events.agfoss.tech/" alt="Events">Events</a>
                    </li>
                </ul>
            </div>
        <div className="col-md-2 mx-auto">
                <h5 className="text-uppercase font-weight-bold mb-4">Contact us</h5>
                  <h6 className="text-uppercase"><i className="fa fa-envelope-o fa-1x"></i> Email</h6>
                    <p>
                      <a href="mailto:fossamritagiri@gmail.com" alt="Email">fossamritagiri@gmail.com</a>
                    </p>
                  <h6 className="text-uppercase"><i className="fa fa-location-arrow fa-1x"></i>Address</h6>
                    <address>Amrita College <br/>of Engineering and Technology <br/>
                        Nagercoil,India</address>
        </div>
        <div className="col-md-2 mx-auto">
          <h5 className="text-uppercasefont-weight-bold mb-4 px-3">Follow us</h5>
          <div className="follow-us">
            <a href="https://github.com/foss-amritagiri" alt="Github"><i className="fa fa-github-alt fa-2x px-2 mx-auto"></i></a>
            <a href="https://twitter.com/foss_amritagiri" alt="Twitter"><i className="fa fa-twitter fa-2x px-2 mx-auto"></i></a>
            <a href="https://instagram.com/ag_foss?igshid=6yoiaz3xfx9g" alt="Instagram"><i className="fa fa-instagram fa-2x px-2 mx-auto"></i></a>
            </div>
            </div>
    </div>
    </div>
    
    </footer>

  )

const footer = () => (
    <footer className="footer-bottom">
      {FooterNav()}
      <div className="footer-copyright text-center py-auto bg-dark row m-0">
      
      <div className="col-md-5 py-3">
         <a href="https://amrita.edu.in">
         <img className="w-50" src={Amrita_logo} alt="amrita" /></a>
       </div>
      <div className="col-md-4 text-white mx-auto py-4">
         &copy; Team AgFoss 2018-{new Date().getFullYear()}.
      </div>
      </div> 
    </footer>
  )

export default footer