import requestService from './requestService'

interface AuthServiceFields {
  email: string;
  password: string;
}

export interface WhoAmI {
  id: string;
  email: string;
  admin: boolean;
}

export const login = (data: AuthServiceFields) =>
  requestService.post('auth/signin', data)
export const logout = () => requestService.post('auth/signout')

export const whoAmI = () =>
  requestService.get<WhoAmI>('auth/whoami').then(({ data }) => data)
