import React from 'react'

const RollButton = ({tenzies, restartGame, reRoll}) => {
  return (
    <button className='rollButton' onClick={tenzies ? restartGame : reRoll}>
        {tenzies ? 'New Game' : 'Roll'}
    </button>
  )
}

export default RollButton