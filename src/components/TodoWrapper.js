import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import {v4 as uuid4} from 'uuid'
import Todo from './Todo'
import EditTodoForm from './EditTodoForm'
const TodoWrapper = () => {
    const [todos,setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuid4(), task: todo, completed: false, isEditing: false}])   
    }
    const ToggleCompleted = id =>{
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, completed: !todo.completed} : todo))}
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id ))
    }
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, isEditing: !todo.isEditing} : todo))
        }
    const saveEdit = (task,id) => {
        setTodos(todos.map(todo => todo.id === id ?{
            ...todo,task: task, isEditing: !todo.isEditing}: todo))
        }
        
  return (
    <div className='flex justify-center w-full px-10'>
        <div className='w-[600px] flex-col items-center'>
        <h1 className='pt-10 pb-3 f-20 text-2xl font-bold italic pl-18 text-center w-full'>TODO APP</h1>
        <TodoForm addTodo = {addTodo} />
        {todos.map((todo,index) => (
            todo?.isEditing? <EditTodoForm task={todo} saveEdit={saveEdit} key={todo.id}/>:
            <Todo task={todo} key={index} ToggleCompleted={ToggleCompleted} deleteTodo = {deleteTodo} editTodo={editTodo}/>
        ))}
        </div>
    </div>
  )
}

export default TodoWrapper