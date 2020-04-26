import React from 'react'
import Skill from '../../images/skill.svg'
import Build from '../../images/build.svg'
import Explore from '../../images/explore.svg'

const Cards = ({
    Image="",
    Heading="",
}) => (
        <div className="card px-2 py-3 d-flex align-items-center">
             <img src={Image} className="w-50 mx-auto" alt="Skill"/>
            <h3 className="lead py-2">{Heading}</h3>
        </div>      
)

export default function things() {
    return (
        <div className="container-fluid">
            <p className="lead text-center my-4 p-2">We're a group of students 
            who are enthusiastic about the open source movement and spread awareness
             about FOSS and Programming.</p>
            <div className="row m-0 my-1">
                <div className="col-md-4 p-2 mx-auto">  
                    <Cards 
                        Image={Skill}
                        Heading="Learn New Skills"
                    />
                </div>
                <div className="col-md-4 p-2 mx-auto">
                 <Cards 
                Image={Build}
                Heading="Build impactful apps"
                />    
                </div>
                <div className="col-md-4 p-2 mx-auto">
                    <Cards 
                     Image={Explore}
                     Heading="Explore the World"
                    />    
                </div>    
                </div>
            </div>
    )
}
