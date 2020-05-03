import React from 'react'

const Poster = ({
    Image="",
    Title="",
    Description="",
    Date=""
}) => (
<div className="card bg-dark text-white">
    <img  className="w-100 image" src={Image} alt="hacktoberfest"/>
            <div className="card-img-overlay">
                <div className="card-title">
                    <p>{Date}</p>
                    <h3 className="title">{Title}</h3>
                    <p>{Description}</p>
                </div>
             </div>
   </div>
)




export default Poster