import React from 'react';
import People from './people'
import Abhinav from '../../assets/team/abhinav.jpg'
import Aadarsh from '../../assets/team/aadarsh.jpg'
import Paresh from '../../assets/team/paresh.jpg'
import Srivatsan from '../../assets/team/srivatsan.jpg'
import Gowshik from '../../assets/team/gowshik.jpg'
import Yugesh from '../../assets/team/yugesh.jpg'

const Members = () => (
            <div>
            <div className="container-fluid row m-0">
               <People 
                  Image={Abhinav}
                  Name="Abhinav"
                  About="Game developer"
                  Instagram="https://www.instagram.com/insert_some_random_name/"
                  Github="https://github.com/Penitentb4u"
                  Twitter="https://twitter.com/abhinavrajesh1"
               />
              <People 
                  Image={Aadarsh}
                  Name="Aadarsh"
                  About="ML"
                  Instagram="https://www.instagram.com/aadhufer/"
                  Github="https://github.com/aadarshsg2000"
                  Twitter="https://twitter.com/sg_aadarsh"
               />
               <People 
                  Image={Gowshik}
                  Name="Gowshik"
                  About="Aspiring Software Developer"
                  Instagram="https://www.instagram.com/gowshik._/"
                  Github="https://github.com/xDeltah"
                  Twitter="https://twitter.com/ReViVeDDeMoN"
               />
             
              </div>
              <div className="container-fluid row m-0">
              <People 
              Image={Paresh}
              Name="Paresh Mon"
              About="UI/UX & Front-end"
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
              <People 
                  Image={Yugesh}
                  Name="Yugesh Raj"
                  About="Android & Game Developer"
           />
           </div>
           </div>
  )


  export default Members;