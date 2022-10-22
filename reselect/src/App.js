import React from 'react';
import { connect } from 'react-redux';

import Box from './Box';
import BoxNew from './BoxNew';
import Color from './Color';

class App extends React.Component {
  handleChange = () => {
    this.props.changeColor && this.props.changeColor();
  }

  render() {
    const { color } = this.props;
    return <>
      <div>
        stateToProps 是浅比较, 更新 Color，即使 Box1 的状态无变化，stateToProps 生成的 size 每次都是不同的引用，
        导致 Box1 的 render 触发：</div>
      <Box />
      <div>BoxNew 使用 reselect 进行优化</div>
      <BoxNew />
      <div>改变颜色，Box1 触发 render：</div>
      <Color color={color} />
      <button onClick={this.handleChange}>change</button>
    </>
  }
}

const stateToProps = (state) => {
  return {
    color: state.color
  }
}

const dispatchToProps = (dispatch) => {
  return {
    changeSize() {
      let action = {
        type: 'change_size'
      }
      dispatch(action)
    },
    changeColor() {
      let action = {
        type: 'change_color'
      }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(App);
