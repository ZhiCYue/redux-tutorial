import React from 'react'
import { Button, Input, List } from 'antd'

const TodoListUI = (props) => {
  return (
    <div style={{ margin: '10px' }}>
      <div>
        <Input
          placeholder={props.inputValue} 
          style={{ width: '250px', marginRight: '10px' }}
          onChange={props.changeInputValue}
          value={props.inputValue}
        />
        <Button
          type="primary"
          onClick={props.clickBtn}
        >Add</Button>
      </div>
      <div style={{ margin: '10px 0', width: '300px' }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (<List.Item onClick={() => {props.deleteItem(index)}}>{item}</List.Item>)}
        ></List>
      </div>
    </div>
  )
}

export default TodoListUI
