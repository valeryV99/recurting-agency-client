import requestService from './requestService'
import { CandidateFormFields } from '../pages/candidateForm/CandidateForm'

export const createCandidate = (body: CandidateFormFields) =>
  requestService.post('candidates', body).then(({ data }) => data)

export const getCandidates = () =>
  requestService.get('candidates').then(({ data }) => data)
