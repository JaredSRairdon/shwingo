import React from 'react'
import { useParams } from 'react-router-dom'

function GamePage() {
  const { hyphenTitle } = useParams();
  
  return (
    <p>{hyphenTitle}</p>
  )
}

export default GamePage