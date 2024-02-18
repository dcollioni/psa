import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './components/app/App'
import Home from './components/home/Home'
import PatientList from './components/patients/PatientList'
import VisitList from './components/visits/VisitList'

const routes = (
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<PatientList />} />
        <Route path="/patients/:patientId/visits" element={<VisitList />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </App>
  </BrowserRouter>
)

export default routes
