import React, { useEffect, useState } from 'react'
import { GoCheck } from "react-icons/go";

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
    <form className='EditTodoForm w-full text-center pb-10 flex align-center' onSubmit={handleSubmit}>
        <input type="text" className='todo-input  py-2 px-2 mr-2 rounded-md w-[500px]'  value={value} onChange={(e)=>{setValue(e.target.value)}}/>
        <button type='submit' className='todo-btn pl-5 bold'><GoCheck size={25}/></button>
    </form>
  )
}

export default EditTodoForm