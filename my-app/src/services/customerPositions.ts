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

export const getCustomerPositions = (customerId: string): Promise<ICustomerPositions[]> =>
  new Promise((resolve) =>
  setTimeout(() =>
      resolve([
        {
          id: '1',
          customerId: '1',
          position: 'Senior Fron-end developer',
          salary: 5000,
          skills: 'HTML, CSS, JS, ReactJS',
          status: 1,
          requirements: 'higher education',
          startDate: '20.07.1999',
          endDate: '20.08.1999',
        },
        {
          id: '2',
          customerId: '1',
          position: 'Senior .Net developer',
          salary: 5000,
          skills: 'HTML, CSS, JS, .Net',
          status: 1,
          requirements: 'higher education',
          startDate: '20.07.1999',
          endDate: '20.08.1999',
        }
      ])
  ,1000))