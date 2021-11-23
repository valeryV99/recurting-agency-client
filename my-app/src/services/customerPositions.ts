import requestService from "./requestService";

export interface ICustomerPositions {
  id: string;
  customerId: string;
  position: string;
  salary: number;
  skills: string;
  status: number
  requirements: string;
  startDate: string;
  endDate: string;
}

export const getCustomerPositions = (customerId: string) =>
  requestService.get(`/positions/${customerId}`).then(({data})=> data);