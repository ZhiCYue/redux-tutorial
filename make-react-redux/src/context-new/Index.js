import React, { Component } from 'react'
import { Provider } from './my-react-redux'

import Header from './Header'
import Content from './Content'

import store from '../store'

class Index extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header />
                    <Content />
                </div>
            </Provider>
        )
    }
}

export default Index
