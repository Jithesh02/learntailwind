import React, { useEffect, useState } from 'react'
import { MdModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

const Todo = ({task,ToggleCompleted,deleteTodo,editTodo}) => {

  return (
    <div className='todo p-5 flex justify-between w-full'>
        {task.completed ? (
  <s>
    <p style={{ cursor: 'pointer' }} className='text-2xl italic' onClick={() => ToggleCompleted(task.id)}>
      {task.task}
    </p>
  </s>
) : (
  <p style={{ cursor: 'pointer' }} className='text-2xl italic' onClick={() => ToggleCompleted(task.id)}>
    {task.task}
  </p>
)}

        <div className='w-[70px] flex justify-between'>
            <button onClick={()=>{editTodo(task.id)}}><MdModeEdit size={25} /></button>
            <button onClick={()=>{deleteTodo(task.id)}}><MdDeleteOutline size={25}/></button>
        </div>
    </div>
  )
}

export default Todo