import React from 'react'
import IndexSidebar from './IndexSidebar'
import GameCard from '../../components/GameCard/GameCard'
import './Home.css'

function Home() {
  const game = {
    id: 1,
    title: "Emoji Tac Toe!",
    hyphenTitle: "emoji-tac-toe",
    description: 'Choose your emoji in this exciting game of tic-tac-toe!',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png'
  }

  

  return (
    <>
      <div className="homepage-container">
        <IndexSidebar/>
        <div className='content-container'>
          <section className="homepage-section">
            <h2 className='section-header'>Popular Games</h2>
            <p>The most popular games across all of Shwingo!</p>
            <div className="section-games">
              <GameCard game={game}/>
              <GameCard game={game}/>
              <GameCard game={game}/>
            </div>
          </section>
          <section className="homepage-section">
            <h2 className='section-header'>Letters</h2>
            <p>The most popular games across all of Shwingo!</p>
            <div className="section-games">
              <GameCard game={game}/>
              <GameCard game={game}/>
              <GameCard game={game}/>
            </div>
          </section>
          <section className="homepage-section">
            <h2 className='section-header'>Numbers</h2>
            <p>The most popular games across all of Shwingo!</p>
            <div className="section-games">
              <GameCard game={game}/>
              <GameCard game={game}/>
              <GameCard game={game}/>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Home