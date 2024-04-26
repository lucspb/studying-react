import React from 'react'

const TaskList = ({tasks}) => {
  return (
    
    <ul>
        {!tasks ? alert("Não há tarefas para serem feitas") :  
        tasks.map((task, index) => (
            <li key={index}>{task}</li>
        ))}
    </ul>
        
    
  )
}

export default TaskList