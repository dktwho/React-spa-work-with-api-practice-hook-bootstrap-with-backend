import React, { useState } from 'react'

const Meme = () => {
  const [input, setInput] = useState({})

  const inputHandler = (e) => {
    setInput(prev => ({...prev, [e.target.name]: e.target.value}))
  }

 
  return (
  <form>
    <div className="mb-3 mt-5">
      <input 
      value={input.top || ''} 
      onChange={inputHandler} 
      type="text" 
      className="form-control" 
      name='top' />
    </div>

    <div className="mb-3">
      <input 
      value={input.bottom || ''} 
      onChange={inputHandler}  
      type="text" 
      className="form-control" 
      name='bottom'/>
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}

export default Meme
