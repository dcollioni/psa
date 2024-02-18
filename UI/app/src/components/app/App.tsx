import React from 'react'
import styles from './App.module.scss'

function App({ children }: { children: React.JSX.Element }) {
  return (
    <div className="app">
      <header>
        <h1 className={styles.title}>PSA - Douglas Collioni</h1>
      </header>
      <div className="content">{children}</div>
    </div>
  )
}

export default App
