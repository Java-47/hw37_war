import React from 'react'
import { game } from '../utils/contants'

const Result = (props) => {
  return (
    <div>
        <h2>{props.winner}</h2>
        <h3>Player: {props.playerTotalScores}, Computer: {props.computerTotalScores}</h3>
        <button onClick={() => props.changePage(game)}>Again ?</button>
    </div>
  )
}

export default Result