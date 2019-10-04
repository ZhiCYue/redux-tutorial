import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './my-react-redux'

import ThemeSwitch from './ThemeSwitch'

class Content extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    }

    render() {
        return (
            <div>
                <p style={{ color: this.props.themeColor }}>React redux 内容</p>
                <ThemeSwitch />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

export default connect(mapStateToProps)(Content)
