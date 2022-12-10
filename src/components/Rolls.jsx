import React from 'react'

const Rolls = ({tenzies, rolls}) => {
  return (
    <div className='scoreBoard'>
        <h3 className='rollNums'>{`${tenzies ?'You won with' :''} ${rolls} Roll${rolls > 1 ?'s':''}`}</h3>
    </div>  
  )
}

export default Rolls