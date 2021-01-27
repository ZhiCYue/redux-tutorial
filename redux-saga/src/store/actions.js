import { createRequestTypes, action } from './utils';

export const LOGIN = createRequestTypes('LOGIN')

export const login = {
  request : (name, password) => action(LOGIN.REQUEST)({name, password}),
  success : (token) => action(LOGIN.SUCCESS)({token}),
  error   : (error) => action(LOGIN.ERROR)({error})
}

export const LOGOUT = 'LOGOUT'
export const logout = action(LOGOUT)
