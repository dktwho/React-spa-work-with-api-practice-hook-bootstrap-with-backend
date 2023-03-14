
import React, { useEffect, useState } from 'react'
import Albums from '../Album/Albums'

const SinatraAlbums = () => {
  const [albums, setAlbums] = useState([])
  useEffect(() => {
    fetch('https://itunes.apple.com/search?entity=album&term=Sinatra&attribute=allArtistTerm&limit=6')
    .then(response => response.json())
    .then(({results}) => setAlbums(results))
  }, [])
  return (
    <div className='row my-2'>
      {albums.map((elem) =>  
      <Albums 
      key={elem.collectionId} 
      img={elem.artworkUrl100} 
      title={elem.collectionName} 
      id={elem.collectionId}
      />)}
    </div>
  )
}

export default SinatraAlbums
