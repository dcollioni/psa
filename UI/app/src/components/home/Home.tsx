import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <h2>Home - Welcome</h2>
      <nav>
        <Link to={'/patients'}>Go to patients</Link>
      </nav>
    </div>
  )
}

export default Home
