import React, { useEffect, useState } from 'react'
import styles from './PatientList.module.scss'
import { Link } from 'react-router-dom'

export interface Patient {
  id: string
  firstName: string
  lastName: string
  email: string
}

const PatientList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [patients, setPatients] = useState<Patient[]>([])

  useEffect(() => {
    const loadPatients = async () => {
      setIsLoading(true)
      try {
        const res = await fetch('http://localhost:5272/api/patients/')
        const patients: Patient[] = await res.json()
        setPatients(patients)
      } catch (e) {
        console.log(e)
      } finally {
        setIsLoading(false)
      }
    }
    if (!isLoading) {
      loadPatients()
    }
  }, [])

  return (
    <div className="patientList">
      <h2>Patients</h2>
      <div className={styles.list}>
        {isLoading && <>Loading...</>}
        {!isLoading && patients.length === 0 && <>No patients found</>}
        {patients.map(p => (
          <div className={styles.item} key={p.id}>
            <span>{`${p.firstName} ${p.lastName} (${p.email})`}</span>
            <Link to={`/patients/${p.id}/visits`}>See visits</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PatientList
