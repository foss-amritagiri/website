import React from 'react'
import Things from './things' 


export default function abouttheclub() {
    return (
        <div className="container">
        <h3 className="text-center my-4">WHO WE ARE?</h3>
        <p className="lead text-justify p-3">
        FOSS@Amritagiri is the open source club.It is a volunteer driven club that 
        focuses on free and open source software (FOSS), open standards, open technologies, 
        and open content. The goal of this society is to promote awareness, usage, and
         development of FOSS.</p>
         <Things/>
        <div className="row m-0">
        <div className="col-md-6 text-justify order-1 mx-auto d-flex">
        <p className="lead">FOSS is a matter of the User’s freedom to run, copy, distribute, study, change and improve the software.
        The “free” as is used in Free and Open Source Softwares refers to ‘free as in freedom’ rather cost. 
        More precisely it refers to four kinds of freedom to the user’s of the Software The freedom to improve the program, 
        and release your improvements (and modified versions in general) to the public, so that the whole community benefits.</p>
        </div>
        <div className="col-md-3 order-md-0 mx-auto d-flex">
        <h1 className="my-5 text-center">What is FOSS?</h1>
        </div>
        </div>
        </div>
    )
}
