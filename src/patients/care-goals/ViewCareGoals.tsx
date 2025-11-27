import React from 'react'
import { useParams } from 'react-router-dom'
import { IdParam } from '../../types/router-params'
import CareGoalTable from './CareGoalTable'

const ViewCareGoals = () => {
  const { id } = useParams<IdParam>()

  return <CareGoalTable patientId={id} />
}

export default ViewCareGoals
