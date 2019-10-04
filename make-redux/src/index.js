import store from './store'

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
