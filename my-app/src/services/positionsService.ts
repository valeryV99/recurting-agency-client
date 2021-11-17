import requestService from './requestService'

export const createPosition = (body: any) =>
  requestService.post('positions', body).then(({ data }) => data)
