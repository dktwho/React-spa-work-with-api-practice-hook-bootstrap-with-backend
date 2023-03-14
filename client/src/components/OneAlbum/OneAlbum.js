import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

const OneAlbum = () => {

  const {id} = useParams()
  const [info, setInfo] = useState(null)
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      fetch(`https://itunes.apple.com/lookup?id=${id}`)
      .then(response => response.json())
      .then(({results}) => setInfo(results[0]) )
      setLoader(false)
    }, 1000)
    
  }, [])
  

  return (
    <>
    {loader && <Loader/>}
    {info &&  <ul className="list-group">
      <li className="list-group-item">Name: {info.collectionName}</li>
      <li className="list-group-item">Number of tracks: {info.trackCount}</li>
      <li className="list-group-item">Price: {info.collectionPrice}</li>
      <li className="list-group-item">Currency: {info.currency}</li>
      <li className="list-group-item">Release date: {new Date(info.releaseDate).toLocaleDateString()}</li>
      <li className="list-group-item">Genre: {info.primaryGenreName}</li>
    </ul>  }
   
</>
  )
}

export default OneAlbum
