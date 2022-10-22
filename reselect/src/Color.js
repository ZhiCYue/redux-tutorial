import React from 'react'

const Box = (props) => {
  const { color } = props;
  return (
    <div>
      <div style={{ width: 10, height: 10, background: color }} />
    </div>
  )
}

export default Box;
