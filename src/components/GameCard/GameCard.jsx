import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './GameCard.css'

function GameCard({ game }) {
  const navigate = useNavigate();

  return (
    <div className="game-card" onClick={() => navigate(`/games/${game.hyphen_title}`)}>
        <img src={game.thumbnail_url} alt="" />
        <h4 className='game-title'>{game.title}</h4>
        <p className="game-description">{game.description}</p>
    </div>
  )
}

export default GameCard