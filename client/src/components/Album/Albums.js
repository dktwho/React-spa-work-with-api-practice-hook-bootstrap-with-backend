
import React from 'react'
import { Link } from 'react-router-dom'


const Albums = ({img, title, id}) => {
  return (
    <div className="col">
     <div className="card my-2" style={{width: "18rem"}}>
      <img src={img} className="card-img-top" alt={title}/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link to={`/album/${id}`}>More</Link>
      </div>
    </div>
    </div>

   
  )
}

export default Albums
