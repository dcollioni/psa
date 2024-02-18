import React from 'react'
import { Link } from 'react-router-dom'

const PatientList = () => {
  return (
    <div className="patientList">
      <h2>PatientList</h2>
      <nav>
        <Link to={'/'}>Home</Link>
      </nav>
    </div>
  )
}

export default PatientList
