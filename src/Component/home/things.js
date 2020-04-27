import React from 'react'
import Skill from '../../images/skill.svg'
import Build from '../../images/build.svg'
import Explore from '../../images/explore.svg'

const Cards = ({
    Image="",
    Heading="",
}) => (
    <div className="col-md-4 p-2 mx-auto">
        <div className="card px-2 py-3 d-flex align-items-center">
             <img src={Image} className="w-100 mx-2 my-2" alt="Skill"/>
            <h3 className="lead p-2">{Heading}</h3>
        </div>      
    </div>
)

export default function things() {
    return (
        <div className="container my-auto">
            <div className="row mx-auto">
                    <Cards 
                        Image={Skill}
                        Heading="Learn New Skills"
                    />
               
                 <Cards 
                Image={Build}
                Heading="Build impactful apps"
                />    
               
                    <Cards 
                     Image={Explore}
                     Heading="Explore the World"
                    />    
                </div>
            </div>
    )
}
