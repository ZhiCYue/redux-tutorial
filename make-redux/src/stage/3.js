const appState = {
    title: {
        text: 'make-redux',
        color: 'red'
    },
    content: {
        text: 'this is content',
        color: 'blue'
    }
}

function stateChanger(state=appState, action) {
    switch(action.type) {
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

// reducer 仅仅做的事情：初始化和计算新的 state
function createStore(reducer) {
    let state
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }
    dispatch({})
    return { getState, dispatch, subscribe }
}

function renderApp(newAppState, oldAppState={}) {
    if(newAppState === oldAppState) return
    renderTitle(newAppState.title, oldAppState.title)
    renderContent(newAppState.content, oldAppState.content)
}

function renderTitle(newTitle, oldTitle={}) {
    if(newTitle === oldTitle) return
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = newTitle.text
    titleDOM.style.color = newTitle.color
}

function renderContent(newContent, oldContent={}) {
    if(newContent === oldContent) return
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = newContent.text
    contentDOM.style.color = newContent.color
}

const store = createStore(stateChanger)
let oldState = store.getState()
store.subscribe(() => {
    const newState = store.getState()
    renderApp(newState, oldState)
    oldState = newState
})

// 首次渲染
renderApp(store.getState())

// 修改内容
store.dispatch({
    type: 'UPDATE_TITLE_TEXT',
    text: 'update title.'
})
store.dispatch({
    type: 'UPDATE_TITLE_COLOR',
    color: 'blue'
})

