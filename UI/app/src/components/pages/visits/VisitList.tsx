import React, { useEffect, useState } from 'react'
import listStyles from './../../common/list/List.module.scss'
import { Navigate, useParams } from 'react-router-dom'
import { Patient } from '../../../entities/Patient'
import { Visit } from '../../../entities/Visit'

const VisitList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [visits, setVisits] = useState<Visit[]>([])
  const [patient, setPatient] = useState<Patient>()
  const { patientId } = useParams()

  useEffect(() => {
    const loadVisits = async () => {
      setIsLoading(true)
      try {
        // patients could be in a store, so we don't need to fetch the details again
        // still, we would have to fetch data from the api in case the user lands on this page directly
        const [resVisits, resPatient] = await Promise.all([
          fetch(`http://localhost:5272/api/patients/${patientId}/visits`),
          fetch(`http://localhost:5272/api/patients/${patientId}`),
        ])
        if (resVisits.ok && resPatient.ok) {
          const [visits, patient]: [Visit[], Patient] = await Promise.all([resVisits.json(), resPatient.json()])
          setVisits(visits)
          setPatient(patient)
        }
      } catch (e) {
        console.log(e)
      } finally {
        setIsLoading(false)
      }
    }
    loadVisits()
  }, [patientId])

  // handles redirect in case patient is not found (invalid query param for example)
  if (!isLoading && !patient) {
    return <Navigate to="/patients" />
  }

  return (
    <div className="visitList">
      <h2>Visits {patient && `(${patient.firstName} ${patient.lastName})`}</h2>
      <div className={listStyles.list}>
        {isLoading && <>Loading...</>}
        {!isLoading && visits.length === 0 && <>No visits found</>}
        {visits.map(v => (
          <div className={listStyles.item} key={v.id}>
            <span>{`${new Date(v.date).toLocaleString()}`}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VisitList
