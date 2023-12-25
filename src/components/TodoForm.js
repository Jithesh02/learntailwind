import React, { useEffect, useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState('');
    // useEffect (()=>{
    //     console.log('hi',value);
    // },[value])
    const handleSubmit = e => {
        e.preventDefault();
        if(value !== ''){
            addTodo(value);
            setValue('');
        }
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' placeholder='what is today task?' value={value} onChange={(e)=>{setValue(e.target.value)}}/>
        <button type='submit' className='todo-btn'>Add</button>
    </form>
  )
}

export default TodoForm