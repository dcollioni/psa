import React from 'react'
import styles from './App.module.scss'
import { Link } from 'react-router-dom'

function App({ children }: { children: React.JSX.Element }) {
  return (
    <div className="app">
      <header>
        <h1 className={styles.title}>PSA</h1>
      </header>
      <nav className={styles.nav}>
        <Link to={'/'}>Home</Link>
        <Link to={'/patients'}>Patients</Link>
      </nav>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default App
