import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"

import { useState, useEffect} from 'react';


function App() {

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  useEffect(() => {
    document.title = "Lista de Tarefas"

    localStorage.setItem('tasks', JSON.stringify(tasks))

  }, [tasks])

  const addTask = (task) => {

    setTasks([...tasks, {id: Date.now(), text: task, done: false}])

  }

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  const toggleTaskDone = (taskId) => {
    setTasks(tasks.map((task) => task.id === taskId ? {...task, done: !task.done} : task))
  
  }

  return (
    <>
     <h1>Lista de tarefas</h1>
     <TaskInput onAddTask={addTask}/>
     <TaskList tasks={tasks} onDeleteTask={removeTask} onToggleTaskDone={toggleTaskDone}/>
    </>
  )
}

export default App
