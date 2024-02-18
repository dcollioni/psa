import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <h2>Home - Welcome</h2>
      <p>
        Go to <Link to="/patients">patients</Link> list to search for patients and visits.
      </p>
    </div>
  )
}

export default Home
