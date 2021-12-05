import requestService from './requestService'

export interface IEmployees {
  id: string;
  customerId: string;
  photo: string;
  surname: string;
  name: string;
  patronymic: string;
  birth: number;
  residenceAddress: string;
  education: string;
  position: string;
  status: string;
  startDate: number;
  endDate: number | null;
  reasonForLeaving: string;
}

export const getEmployees = (customerId: string): Promise<IEmployees[]> =>
  requestService.get(`employees/${customerId}`).then(({ data }) => data)
