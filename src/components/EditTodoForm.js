import React, { useEffect, useState } from 'react'

const EditTodoForm = ({editTodo,task,saveEdit}) => {
    const [value,setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();
        if(value !== ''){
            saveEdit(value, task.id)
            setValue('');
        }
    }

  return (
    <form className='EditTodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input'  value={value} onChange={(e)=>{setValue(e.target.value)}}/>
        <button type='submit' className='todo-btn'>Save</button>
    </form>
  )
}

export default EditTodoForm