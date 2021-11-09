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
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            id: '1',
            customerId: '1',
            photo: 'someUrl',
            surname: 'Viarenich',
            name: 'Valery',
            patronymic: 'Ivanovich',
            birth: 123123123,
            residenceAddress: 'Minsk',
            education: 'BSUIR',
            position: 'Senior Fron-end developer',
            status: 'working',
            startDate: 123124124,
            endDate: null,
            reasonForLeaving: 'More salary',
          },
          {
            id: '2',
            customerId: '1',
            photo: 'someUrl',
            surname: 'Ihor',
            name: 'Karpekin',
            patronymic: 'Ivanovich',
            birth: 123123123,
            residenceAddress: 'Minsk',
            education: 'BSUIR',
            position: 'Senior .Net developer',
            status: 'working',
            startDate: 123124124,
            endDate: null,
            reasonForLeaving: 'More salary',
          },
        ]),
      1000
    )
  )
