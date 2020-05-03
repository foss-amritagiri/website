import React from 'react'

const People = ({
    Image="",
    Name="",
    About="",
    Instagram="#",
    Twitter="#",
    Github="#"
}) => (
    <div className="col-md-4 col-lg-3 col-xl-3 p-2 mx-auto d-flex align-items-center">
    <div className="people m-0 p-2 d-flex mx-auto align-items-center">
    <img src={Image}  alt={Name} />
    <div className="info">
      <h2>{Name}</h2>
      <p>{About}</p>
      <a href={Instagram} className="fa fa-instagram fa-2x" alt="Instagram"></a>
      <a href={Twitter} className="fa fa-twitter fa-2x" alt="Twitter"></a>
      <a href={Github} className="fa fa-github fa-2x" alt="Github"></a>
    </div>
  </div>
  </div>
)






export default People