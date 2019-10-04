import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Content from './Content'

import store from '../store'

class Index extends Component {
    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext() {
        return { store }
    }

    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

export default Index
