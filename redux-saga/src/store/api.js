import { apify } from './utils';

const users = [
  { name: 'admin', password: 'admin' },
  { name: 'guest', password: 'guest' }
]

let tokenId = 0

function authFn({ token, name, password }) {
  if (token) {
    return refreshTokenFn(token)
  }

  else {
    const valid = users.some(
      u => u.name === name && u.password === password
    )

    if (valid)
      return { expires_in: 2000, id: ++tokenId, $$token: true }
    else
      throw new Error('Invalid credentials')
  }

}

function refreshTokenFn(token) {
  if (!token.$$token)
    throw new Error('Invalid token')
  return { ...token, id: ++tokenId }
}

const api = {
  authorize: apify(authFn),
  refreshToken: apify(refreshTokenFn)
}

export default api;
