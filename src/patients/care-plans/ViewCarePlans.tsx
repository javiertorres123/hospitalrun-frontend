import React from 'react'
import { useParams } from 'react-router-dom'
import { IdParam } from '../../types/router-params'
import CarePlanTable from './CarePlanTable'

const ViewCarePlans = () => {
   const { id } = useParams<IdParam>()

  return <CarePlanTable patientId={id} />
}

export default ViewCarePlans
