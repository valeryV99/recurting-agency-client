import requestService from './requestService'

export interface Customer {
  id: string;
  name: string;
  address: string;
}

export const getCustomers = () =>
  requestService.get('customers').then(({ data }) => data)

export const getCustomer = (
  customerId: string
): Promise<Customer | undefined> => {
  const customers = [
    {
      id: '1',
      name: 'Light Well Organization',
      address: 'Belarus, Minsk',
    },
    {
      id: '2',
      name: 'Issoft',
      address: 'the USA, Minnesota',
    },
    {
      id: '3',
      name: 'Sideways6',
      address: 'the UK, London',
    },
    {
      id: '4',
      name: 'SmartIT',
      address: 'the USA, san-francisco',
    },
    {
      id: '5',
      name: '3Commas',
      address: 'Estonia, Tallinn',
    },
  ]
  return new Promise((resolve) =>
    setTimeout(
      () => resolve(customers.find(({ id }) => id === customerId)),
      1000
    )
  )
}

export const createCustomer = ({
  name,
  address,
}: {
  name: string,
  address: string,
}) =>
  requestService
    .post('customers', {
      customer_name: name,
      address: address,
    })
    .then(({ data }) => data)
