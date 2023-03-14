import React, { useEffect, useState, useCallback } from 'react'
import NewCatButton from '../NewCatButton/NewCatButton'

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

  const newCatHandler = useCallback (() => {
    fetchCat()
  }, [])

   return (
    <>
      {img &&  (
      <div className="card" style={{width: '18rem'}}>
        <img src={img} className="card-img-top" alt="randomcat"/>
        <div className="card-body">
        </div>
      </div>
    ) }

    <NewCatButton newCatHandler={newCatHandler} />
    </>

   
  )
}

export default RandomCats
