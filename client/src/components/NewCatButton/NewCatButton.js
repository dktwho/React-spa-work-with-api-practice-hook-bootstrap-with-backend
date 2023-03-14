import React from 'react'

const NewCatButton = ({newCatHandler}) => {
  return (
    <div>
         <button onClick={newCatHandler} type="button" className="btn btn-primary my-2">New Cat</button>
    </div>
  )
}

export default React.memo(NewCatButton)
