export interface Customer {
  id: string;
  name: string;
  address: string;
}

export const getCustomers = (): Promise<Customer[]> => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
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
        ]),
      1000
    )
  )
}
