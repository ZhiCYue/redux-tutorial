import createNextState, { isDraftable } from 'immer'

export function freezeDraftable(val) {
  return isDraftable(val) ? createNextState(val, () => {}) : val
}
