import React, { useEffect, useState } from 'react'

const Todo = ({task,ToggleCompleted,deleteTodo,editTodo}) => {

  return (
    <div className='todo'>
        {task.completed ? (
  <s>
    <p style={{ cursor: 'pointer' }} onClick={() => ToggleCompleted(task.id)}>
      {task.task}
    </p>
  </s>
) : (
  <p style={{ cursor: 'pointer' }} onClick={() => ToggleCompleted(task.id)}>
    {task.task}
  </p>
)}

        <div>
            <button onClick={()=>{editTodo(task.id)}}>Edit</button>
            <button onClick={()=>{deleteTodo(task.id)}}>Remove</button>
        </div>
    </div>
  )
}

export default Todo