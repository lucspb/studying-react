import Task from './Task'

const TaskList = ({tasks, onDeleteTask, onToggleTaskDone}) => {

  if(tasks.length === 0){
    return <h3>Não há tarefas cadastradas</h3>
  }

  return (
    <ul>
        {tasks.map((task) => (
          <Task key={task.id} 
          task={task} 
          onDelete={() => onDeleteTask(task.id)}
          onToggleDone={() => onToggleTaskDone(task.id)}
          />
        ))}
    </ul>
  )
}

export default TaskList