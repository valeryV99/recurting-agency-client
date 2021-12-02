import requestService from './requestService'

export const createInterview = (body: any) =>
  requestService.post('interviews', body).then(({ data }) => data)

export const getAllInterviews = () =>
  requestService.get('interviews').then(({ data }) => data)
