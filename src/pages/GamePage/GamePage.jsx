import React, { useContext, useState, useEffect } from 'react'
import { APIDataContext } from '../../providers/APIDataContext';
import { useParams } from 'react-router-dom'

import './GamePage.css'

function GamePage({ session }) {
  const { gameList, loading } = useContext(APIDataContext);
  const { hyphenTitle } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    if (!loading && gameList.length > 0) {
      // Use find to get the game with the matching hyphenTitle
      const foundGame = gameList.find((g) => g.hyphen_title === hyphenTitle);
      setGame(foundGame);
    }
  }, [gameList, hyphenTitle, loading]); // re-run useEffect if any of these 3 values change

  if (loading) {
    return <div>Loading...</div>
  } else if (!loading) {
    return (
      <>
        <div className="gamepage-container">
          <div className='gamepage-header'>
            <h1>{game.title}</h1>
            <p>{game.description}</p>
          </div>
          <div className="game-window">
            <iframe
              src={game.game_url}
              title= /* game.title */ "Game Window" 
              id="game-iframe"
              scrolling="yes"
            />
          </div>
        </div>
  
      </>
    )
  }

}

export default GamePage