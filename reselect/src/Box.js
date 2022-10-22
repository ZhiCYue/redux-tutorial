import React from 'react'

import { connect } from 'react-redux'

const Demo = (props) => {
  const { size } = props;
  const { height, width } = size;
  const time = (new Date()).toLocaleTimeString();
  return (
    <div className='box' style={{ width, height }}>
      <span>Box1: {time}</span>
    </div>
  )
}

const stateToProps = (state) => {
  return {
    size: {
      width: state.width,
      height: state.height
    }
  }
}

export default connect(stateToProps, null)(Demo);
