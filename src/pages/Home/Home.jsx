import React from 'react'
import IndexSidebar from './IndexSidebar'
import './Home.css'

function Home() {
  return (
    <>
      <div className="homepage-container">
        <IndexSidebar/>
        <div className='content-container'>
          <section className="homepage-section">
            <h2 className='section-header'>Popular Games</h2>
            <p>The most popular games across all of Shwingo!</p>
            <div className="section-games">
              <div className="section-game">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png" alt="" />
                <h4 className='game-title'>Emoji-Tac-Toe</h4>
                <p className="game-description">Choose your emoji in this exciting game of tic-tac-toe!</p>
              </div>
            </div>

          </section>
        </div>
      </div>
    </>
  )
}

export default Home