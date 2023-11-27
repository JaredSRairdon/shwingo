import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../../apis/supabaseClient'
import App from './../../../../brick-click/src/App'
import './GamePage.css'

function GamePage({ session }) {
  const { hyphenTitle } = useParams();

  return (
    <>
      <div className="gamepage-container">
        {/* TODO: Pass Game object (or query db w/ hyphenTitle) to get
                  game description and other metadata */}
        <div className='gamepage-header'>
          <h1>{hyphenTitle}</h1>
        </div>
        <div className="game-window">
          <iframe
            src={`https://jaredsrairdon.github.io/${hyphenTitle}/`}
            title="Game Window"
            id="game-iframe"
            scrolling="yes"
          />
        </div>
      </div>

    </>
  )
}

export default GamePage