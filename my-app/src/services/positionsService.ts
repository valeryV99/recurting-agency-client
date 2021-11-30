import requestService from './requestService'
import { PositionFormFields } from '../pages/position/components/positionForm/positionForm'

export const createPosition = (body: any) =>
  requestService.post('positions', body).then(({ data }) => data)

export const getPositionById = (positionId: string) =>
  requestService.get(`positions/${positionId}/get`).then(({ data }) => data)

export const editPositionById = (
  positionId: string,
  body: PositionFormFields
) =>
  requestService
    .put(`positions/${positionId}/edit`, body)
    .then(({ data }) => data)

export const getAllPositions = () =>
  requestService.get('positions').then(({ data }) => data)
