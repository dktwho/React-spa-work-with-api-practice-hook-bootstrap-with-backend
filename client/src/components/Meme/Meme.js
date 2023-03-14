import React, { useState } from 'react'

const Meme = () => {
  const [input, setInput] = useState({})
  const [mem, setMem] = useState(null)

  const inputHandler = (e) => {
    setInput(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3002/meme?top=${input.top}&bottom=${input.bottom}`)
    .then(response=>response.json())
    .then(data => setMem(data))
    setInput({})
  }
 
  return ( 
    <>
    <form onSubmit={submitHandler}>
    <div className="mb-3 mt-5">
      <input 
      placeholder='top text'
      value={input.top || ''} 
      onChange={inputHandler} 
      type="text" 
      className="form-control" 
      name='top' />
    </div>

    <div className="mb-3">
      <input 
      placeholder='bottom text'
      value={input.bottom || ''} 
      onChange={inputHandler}  
      type="text" 
      className="form-control" 
      name='bottom'/>
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
  </form>

    <div className='my-3'>
    {mem &&  (
      <div className="card" style={{width: '18rem'}}>
        <img src={mem} className="card-img-top" alt="randomcat"/>
        <div className="card-body">
        </div>
      </div>
) }
    </div>
  

    </>
  


  
  )
}

export default Meme
