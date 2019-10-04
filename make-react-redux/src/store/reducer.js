const defaultState = {
    themeColor: 'red'
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, themeColor: action.themeColor }
        default:
            return state
    }
}
