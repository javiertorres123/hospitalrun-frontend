import React from 'react'
import { useParams } from 'react-router-dom'
import { IdParam } from '../../types/router-params'
import DiagnosisTable from './DiagnosisTable'

const ViewDiagnoses = () => {
  const { id } = useParams<IdParam>()

  return <DiagnosisTable patientId={id} />
}

export default ViewDiagnoses
