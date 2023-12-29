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
    <form className='TodoForm w-full text-center pb-5' onSubmit={handleSubmit}>
        <input type="text" className='todo-input py-2 px-2 mr-2 rounded-md w-[500px]' placeholder='what is today task?' value={value} onChange={(e)=>{setValue(e.target.value)}}/>
        <button type='submit' className='todo-btn py-2 px-5 bg-stone-500 rounded-sm'>Add</button>
    </form>
  )
}

export default TodoForm