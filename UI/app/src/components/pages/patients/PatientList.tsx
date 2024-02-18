import React, { useEffect, useState } from 'react'
import styles from './PatientList.module.scss'
import { Link } from 'react-router-dom'
import { Patient } from '../../../entities/Patient'
import listStyles from '../../common/list/List.module.scss'

const PatientList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [patients, setPatients] = useState<Patient[]>([])
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    const loadPatients = async () => {
      setIsLoading(true)
      try {
        // could implement a debounce here
        const res = await fetch(`http://localhost:5272/api/patients?search=${search}`)
        if (res.ok) {
          const patients: Patient[] = await res.json()
          setPatients(patients)
        }
      } catch (e) {
        console.log(e)
      } finally {
        setIsLoading(false)
      }
    }
    loadPatients()
  }, [search])

  return (
    <div className="patientList">
      <h2>Patients</h2>
      <div className={styles.search}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search patients by name and email"
          autoFocus
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className={listStyles.list}>
        {patients.map(p => (
          <div className={listStyles.item} key={p.id}>
            <span>{`${p.firstName} ${p.lastName} (${p.email})`}</span>
            <Link to={`/patients/${p.id}/visits`}>See visits</Link>
          </div>
        ))}
      </div>
      {!isLoading && patients.length === 0 && <>No patients found</>}
      {isLoading && <>Loading...</>}
    </div>
  )
}

export default PatientList
