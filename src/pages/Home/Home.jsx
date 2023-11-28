import React, { useState, useEffect, useContext } from 'react'
import IndexSidebar from './IndexSidebar'
import GameCard from '../../components/GameCard/GameCard'
import { APIDataContext } from './../../providers/APIDataContext'
import './Home.css'

function Home() {
  const { gameList } = useContext(APIDataContext);

  return (
    <>
      <div className="homepage-container">
        <IndexSidebar/>
        <div className='content-container'>
          <section className="homepage-section">
            <div className='section-header'>
              <h2>Popular Games</h2>
              <p>The most popular games across all of Shwingo!</p>
            </div>
            <div className="section-games">
              {
                gameList.map((game, index) => {
                  return <GameCard game={game} key={index}/>
                })
              }
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home