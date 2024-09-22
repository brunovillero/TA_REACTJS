import './App.css'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleInputChange = (event) => {
    setNewTask(event.target.value)
  }

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask])
      setNewTask('')
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Lista de Tareas</h2>

      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Ingresa una nueva tarea"
        style={{ padding: '10px', width: '200px', marginRight: '10px' }}
      />

      <button
        onClick={handleAddTask}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Agregar Tarea
      </button>

      <ul style={{ marginTop: '20px', listStyle: 'none', paddingLeft: '0' }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ padding: '10px 0', fontSize: '18px' }}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
