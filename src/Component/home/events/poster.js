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
                    <h3 className="lead">{Date}</h3>
                    <h2 className="title">{Title}</h2>
                    <p className="">{Description}</p>
                </div>
             </div>
   </div>
)




export default Poster