import React from 'react'

const Poster = ({
    Image="",
    Title=""
}) => (
<div class="card bg-dark text-white">
    <img  className="w-100 image" src={Image} alt="hacktoberfest"/>
            <div class="card-img-overlay">
                <div className="card-title">
                    <h2>{Title}</h2>
                </div>
             </div>
   </div>
)




export default Poster