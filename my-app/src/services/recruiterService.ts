import requestService from './requestService'

export const getAllRecruiters = () =>
  requestService.get('recruiters').then(({ data }) => data)
