import {MdDeleteForever} from 'react-icons/md'
import {AiFillEdit} from 'react-icons/ai'

import React from 'react'
import './TodoList.css'

function Todolist(props) {
    
    const {todoItem,Delete,edditing} = props
  return (
    <ul className='todolist'>
    {todoItem.map((element,index)=><li className='todo-item' key={index}>
        <p className='title'>{element}</p>
        <div>
        <MdDeleteForever className='icon' onClick={()=>Delete(index)}/>
        <AiFillEdit className='icon' onClick={()=>edditing(index)}/>
        </div>
        
        </li>)}
    
    </ul>
    
  )
}

export default Todolist
