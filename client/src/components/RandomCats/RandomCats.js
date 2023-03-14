import React, { useEffect, useState } from 'react'

const RandomCats = () => {
  const [img, setImg] = useState(null)
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response=>response.json())
    .then(data => setImg(data[0].url) )

  }, [] )
  return (
    <>
      {img &&  (
      <div className="card" style={{width: '18rem'}}>
        <img src={img} className="card-img-top" alt="randomcat"/>
        <div className="card-body">
        </div>
      </div>
    ) }
    </>

   
  )
}

export default RandomCats
