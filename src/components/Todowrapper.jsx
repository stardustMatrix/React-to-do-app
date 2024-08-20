import React, {useState} from 'react';
import Todoform from './todoform';
import Todo from './todo';
import {v4 as uuidv4} from 'uuid';
import EditTodoform from './edittodoform';
uuidv4();

function Todowrapper() {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing:false}])
    console.log(todos);
    }

    const togglecomplete = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed : !todo.completed} : todo))}
        

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }



  return (
   <div className='TodoWrapper'>

    <h1>YOUR TO DO LIST</h1>
   <Todoform addTodo={addTodo} />

    {todos.map((todo, index)=>(

        todo.isEditing ? (

            <EditTodoform editTodo={editTask} task={todo} />
        ) : (

            <Todo task={todo} key={index}
            togglecomplete={togglecomplete} 
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            />
        )




    ))}

   </div>
  )
}
export default Todowrapper