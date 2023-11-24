import React from 'react'
import IndexSidebar from './IndexSidebar'
import './Home.css'

function Home() {
  return (
    <>
      <div className="homepage-container">
        <IndexSidebar/>
        <div className='content-container'>Home</div>
      </div>
    </>
  )
}

export default Home