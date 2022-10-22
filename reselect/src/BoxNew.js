import React from 'react'

import { connect } from 'react-redux'
import { createSelector } from 'reselect';

const Demo = (props) => {
  const { size } = props;
  const { height, width } = size;
  const time = (new Date()).toLocaleTimeString();
  return (
    <div className='box' style={{ width, height }}>
      <span>Box New: {time}</span>
    </div>
  )
}

const computedData = createSelector(state => state.height, state => state.width, (height, width) => ({ height, width }));

const stateToProps = (state) => {
  return {
    size: computedData(state)
  }
}

export default connect(stateToProps, null)(Demo);
