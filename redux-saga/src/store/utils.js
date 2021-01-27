// const log = v => console.log(v)
export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const action = type => (payload={}) => ({type, ...payload})

export function createRequestTypes(base) {
  return {
    REQUEST : `${base}_REQUEST`,
    SUCCESS : `${base}_SUCCESS`,
    ERROR   : `${base}_ERROR`
  }
}

export function apify(fn) {
  return (...args) => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(fn(...args))
      } catch(e) {
        reject(e)
      }    
    }, 1000)
  }) 
}
