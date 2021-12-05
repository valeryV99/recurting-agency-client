import requestService from './requestService'

export interface Customer {
  id: string;
  customerName: string;
  address: string;
}

export const getCustomers = () =>
  requestService.get('customers').then(({ data }) => data)

export const getCustomer = (customerId: string) =>
  requestService.get(`customers/${customerId}`).then(({ data }) => data)

export const createCustomer = ({
  name,
  address,
}: {
  name: string,
  address: string,
}) =>
  requestService
    .post('customers', {
      customerName: name,
      address: address,
    })
    .then(({ data }) => data)
