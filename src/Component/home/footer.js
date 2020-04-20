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
    <footer class="page-footer text-center text-md-left pt-2">
    <div class="container-fluid">
      <div class="row">
            <div class="col-md-2 mx-auto">
                <h5 class="text-uppercase font-weight-bold mb-4">The Club</h5>
                 <ul class="list-unstyled">
                    <li><a href="#!">Blog</a></li>
                    <li><a href="#!">Workshop</a></li>
                    <li><a href="#!">Events</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
        <div class="col-md-2 mx-auto">
                <h5 class="text-uppercase font-weight-bold mb-4">Contact us</h5>
                    <p>Amrita College of Engineering and Technology <br/>
                        Nagercoil,India</p>
            </div>
    </div>
    </div>
    </footer>

  )

const footer = () => (
    <footer>
      <FooterNav />
      <div className="footer text-center pt-4">
          <div className="coc">
            &copy; Team agfoss 2018-{new Date().getFullYear()}. All Rights
            Reserved.
          </div>
        </div>
    </footer>
  )

export default footer