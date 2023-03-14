import React, { useEffect, useState } from 'react'
import NewCat from '../NewCat/NewCat'

const RandomCats = () => {
  const [img, setImg] = useState(null)

  const fetchCat = async() => {
   const response = await fetch('https://api.thecatapi.com/v1/images/search')
   const data = await response.json()
    setImg(data[0].url) 
  }
  useEffect(() => {
    fetchCat()
  }, [] )

  const newCatHandler = () => {
    fetchCat()
  }
   return (
    <>
      {img &&  (
      <div className="card" style={{width: '18rem'}}>
        <img src={img} className="card-img-top" alt="randomcat"/>
        <div className="card-body">
        </div>
      </div>
    ) }
    <button onClick={newCatHandler} type="button" className="btn btn-primary my-2">New Cat</button>
    <NewCat />
    </>

   
  )
}

export default RandomCats
