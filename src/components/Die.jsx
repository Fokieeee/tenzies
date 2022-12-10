import React from 'react'

const Die = (props) => {
  // console.log(props.isHeld)
  return (
    <div 
      onClick={() => props.holdDice(props.id)} 
      className={`die${props.isHeld ?'True' :''}`}
    >
        <h1 className='dieNum'>{props.value}</h1>
    </div>
  )
}

export default Die