import { freezeDraftable } from './utils'
import { createAction } from './createAction'
import { createReducer } from './createReducer'
import { executeReducerBuilderCallback } from './mapBuilders'

function getType(slice, actionKey) {
  return `${slice}/${actionKey}`
}

function createSlice(options){
  const { name } = options
  if (!name) {
    throw new Error('`name` is a required option for createSlice')
  }
 
  const initialState =
    typeof options.initialState == 'function'
      ? options.initialState
      : freezeDraftable(options.initialState)

  const reducers = options.reducers || {}

  const reducerNames = Object.keys(reducers)

  const sliceCaseReducersByName = {}
  const sliceCaseReducersByType = {}
  const actionCreators = {}

  reducerNames.forEach((reducerName) => {
    const maybeReducerWithPrepare = reducers[reducerName]
    const type = getType(name, reducerName)

    let caseReducer
    let prepareCallback

    if ('reducer' in maybeReducerWithPrepare) {
      caseReducer = maybeReducerWithPrepare.reducer
      prepareCallback = maybeReducerWithPrepare.prepare
    } else {
      caseReducer = maybeReducerWithPrepare
    }

    sliceCaseReducersByName[reducerName] = caseReducer
    sliceCaseReducersByType[type] = caseReducer
    actionCreators[reducerName] = prepareCallback
      ? createAction(type, prepareCallback)
      : createAction(type)
  })

  function buildReducer() {
    const [
      extraReducers = {},
      actionMatchers = [],
      defaultCaseReducer = undefined,
    ] =
      typeof options.extraReducers === 'function'
        ? executeReducerBuilderCallback(options.extraReducers)
        : [options.extraReducers]

    const finalCaseReducers = { ...extraReducers, ...sliceCaseReducersByType }
    return createReducer(
      initialState,
      finalCaseReducers,
      actionMatchers,
      defaultCaseReducer
    )
  }

  let _reducer

  return {
    name,
    reducer(state, action) {
      if (!_reducer) _reducer = buildReducer()

      return _reducer(state, action)
    },
    actions: actionCreators,
    caseReducers: sliceCaseReducersByName,
    getInitialState() {
      if (!_reducer) _reducer = buildReducer()

      return _reducer.getInitialState()
    },
  }
}

export {
  createSlice
}
