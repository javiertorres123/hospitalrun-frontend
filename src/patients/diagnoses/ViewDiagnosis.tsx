import React from 'react'
import { useParams } from 'react-router-dom'
import { IdParam } from '../../types/router-params'
import Loading from '../../shared/components/Loading'
import useDiagnosis from '../hooks/useDiagnosis'
import usePatient from '../hooks/usePatient'
import DiagnosisForm from './DiagnosisForm'

const ViewDiagnosis = () => {
  const { id } = useParams<IdParam>()
  const { data: patient, status: patientStatus } = usePatient(patientId)
  const { data: diagnosis, status: diagnosisStatus } = useDiagnosis(patientId, diagnosisId)

  if (
    patient === undefined ||
    diagnosis === undefined ||
    patientStatus === 'loading' ||
    diagnosisStatus === 'loading'
  ) {
    return <Loading />
  }

  return (
    <>
      <h2>{diagnosis.name}</h2>
      <DiagnosisForm patient={patient} diagnosis={diagnosis} disabled />
    </>
  )
}

export default ViewDiagnosis
