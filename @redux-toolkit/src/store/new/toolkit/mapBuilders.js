
function executeReducerBuilderCallback(builderCallback){
  const actionsMap = {}
  const actionMatchers = []
  let defaultCaseReducer
  const builder = {
    addCase(
      typeOrActionCreator,
      reducer
    ) {
      if (process.env.NODE_ENV !== 'production') {
        /*
         to keep the definition by the user in line with actual behavior, 
         we enforce `addCase` to always be called before calling `addMatcher`
         as matching cases take precedence over matchers
         */
        if (actionMatchers.length > 0) {
          throw new Error(
            '`builder.addCase` should only be called before calling `builder.addMatcher`'
          )
        }
        if (defaultCaseReducer) {
          throw new Error(
            '`builder.addCase` should only be called before calling `builder.addDefaultCase`'
          )
        }
      }
      const type =
        typeof typeOrActionCreator === 'string'
          ? typeOrActionCreator
          : typeOrActionCreator.type
      if (type in actionsMap) {
        throw new Error(
          'addCase cannot be called with two reducers for the same action type'
        )
      }
      actionsMap[type] = reducer
      return builder
    },
    addMatcher(
      matcher,
      reducer
    ) {
      if (process.env.NODE_ENV !== 'production') {
        if (defaultCaseReducer) {
          throw new Error(
            '`builder.addMatcher` should only be called before calling `builder.addDefaultCase`'
          )
        }
      }
      actionMatchers.push({ matcher, reducer })
      return builder
    },
    addDefaultCase(reducer) {
      if (process.env.NODE_ENV !== 'production') {
        if (defaultCaseReducer) {
          throw new Error('`builder.addDefaultCase` can only be called once')
        }
      }
      defaultCaseReducer = reducer
      return builder
    },
  }
  builderCallback(builder)
  return [actionsMap, actionMatchers, defaultCaseReducer]
}

export {
  executeReducerBuilderCallback
}
