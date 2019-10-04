const defaultState = {
    title: {
        text: 'make-redux',
        color: 'red'
    },
    content: {
        text: 'this is content',
        color: 'blue'
    }
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            return {
                ...state,
                title: {
                    ...state.title,
                    text: action.text
                }
            }
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                content: {
                    color: action.color
                }
            }
        default:
            return state
    }
}
