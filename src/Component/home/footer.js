import React from 'react'
/*export default function Footer() {
    return (
        <div className="footer fixed-bottom bg-dark">
            <div class="footer-copyright text-center py-3">
            <span className="text-white">FOSS@AMRITAGIRI</span> © 2020 Copyright
             </div>
        </div>
    )
}*/

const FooterNav = () => (
    <footer className="footer text-center text-md-left pt-2 bg-warning">
    <div className="container-fluid">
      <div className="row">
            <div className="col-md-2 mx-auto">
                <h5 className="text-uppercase font-weight-bold mb-4">The Club</h5>
                 <ul className="list-unstyled">
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Workshop</a></li>
                    <li><a href="#">Events</a></li>
                </ul>
            </div>
        <div className="col-md-2 mx-auto">
                <h5 className="text-uppercase font-weight-bold mb-4">Contact us</h5>
                  <h6 className="text-uppercase"><i className="fa fa-envelope-o fa-1x"></i> Email</h6>
                    <p><a href="mailto:amritagirifoss@gmail.com">amritagirifoss@gmail.com</a></p>
                  <h6 className="text-uppercase"><i className="fa fa-location-arrow fa-1x"></i>Address</h6>
                    <p>Amrita College <br/>of Engineering and Technology <br/>
                        Nagercoil,India</p>
        </div>
        <div className="col-md-2 mx-auto">
          <h5 className="text-uppercasefont-weight-bold mb-4 px-3">Follow us</h5>
          <div className="follow-us">
            <a href="https://github.com/foss-amritagiri"><i className="fa fa-github-alt fa-2x px-2 mx-auto"></i></a>
            <a href="#"><i className="fa fa-twitter fa-2x px-2 mx-auto"></i></a>
            <a href="#"><i className="fa fa-instagram fa-2x px-2 mx-auto"></i></a>
            </div>
            </div>
    </div>
    </div>
    
    </footer>

  )

  const footer_bottom =() => (
    <div className="footer-copyright text-center py-auto bg-dark row m-0">
      
      <div className="col-md-5 py-3 ">
         <a href="https://amrita.edu.in">
         <img className="w-50" src="https://events.agfoss.tech/static/amrita-c4212d3f473f977f4417f58c4a8103d6.png" alt="amrita" /></a>
       </div>
      <div className="col-md-4 text-white mx-auto py-4">
         &copy; Team AgFoss 2018-{new Date().getFullYear()}. All Rights
        Reserved.
      </div>
      </div> 
  )

const footer = () => (
    <footer>
      {FooterNav()}
      {footer_bottom()}
    </footer>
  )

export default footer