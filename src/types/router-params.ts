export type IdParam = {
  id: string
}

export type PatientIdParam = {
  id: string
  patientId?: string
  noteId?: string
  visitId?: string
  diagnosisId?: string
  allergyId?: string
  carePlanId?: string
  careGoalId?: string
}
