import React from 'react'
import Things from './things' 


export default function abouttheclub() {
    return (
        <div className="container">
        <div className="row m-0 my-4">
             <div className="col-md-5 order-md-0 text-center">
                <h2 className="my-5 text-center">WHO WE ARE?</h2>
             </div>
            <div className="col-md-6 text-justify order-1 mx-auto d-flex">
        <p className="lead">
        FOSS@Amritagiri is the open source club.It is a volunteer driven club that 
        focuses on free and open source software (FOSS), open standards, open technologies, 
        and open content. The goal of this society is to promote awareness, usage, and
         development of FOSS.</p>
         </div>
         </div>
         <Things/>
        <div className="row m-0">
        <div className="col-md-6 text-justify order-1 mx-auto d-flex">
        <p className="lead">FOSS is a matter of the User’s freedom to run, copy, distribute, study, change and improve the software.
        The “free” as is used in Free and Open Source Softwares refers to ‘free as in freedom’ rather cost. 
        More precisely it refers to four kinds of freedom to the user’s of the Software The freedom to improve the program, 
        and release your improvements (and modified versions in general) to the public, so that the whole community benefits.</p>
        </div>
        <div className="col-md-3 order-md-0 mx-auto">
        <h2 className="my-5 text-center">What is FOSS?</h2>
        </div>
        </div>
        </div>
    )
}
