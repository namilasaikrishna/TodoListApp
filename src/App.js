import { useState } from 'react';

import Todolist from './Components/Todolist';
import './App.css';

function App() {
  

  const[input,setInput] = useState('')
  const[todos,setTodos] = useState([])
  const [edit,setEdit] = useState(true)
  

  const onChangeHandler = (e) =>{
    setInput(e.target.value)
}

const onSubmitHandler = (e) =>{
  if(input === ""){
    alert('enter valid input')
  }
  else{
    e.preventDefault()
    const newTodos = [...todos,input]
    setTodos(newTodos)
    setInput("")
    setEdit(true)
    
  }
    
}

const onDeleteHandler = (index) =>{
  const filteringTodos = todos.filter((each,filterIndex)=>filterIndex !== index)
  setTodos(filteringTodos)
  
}

const onEditHandler = (index) =>{
  const filteringTodos = todos.filter((each,filterIndex)=>filterIndex !== index)
  const editingTodos = todos.find((eTodo,eIndex)=>eIndex === index)
  setTodos(filteringTodos)
  setInput(editingTodos)
  setEdit(edit => !edit)
  
}
  return (
    
    <div className='container'>
    <h1>Todolist</h1>
    <form onSubmit={onSubmitHandler}>
    <input type='text' placeholder='enter todo' value={input} onChange={onChangeHandler} />
    <button type='submit' className={edit?"btn-1":"btn-2"}>{edit?"Add Item":"Edit Item"}</button>
    </form>
    
    <Todolist todoItem = {todos} Delete={onDeleteHandler} edditing = {onEditHandler}/>
    </div>
    
    
  );
}

export default App;
