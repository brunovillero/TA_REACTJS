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

  const handleDeleteTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove))
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Lista de Tareas</h2>

      {/* Input para agregar una nueva tarea */}
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Ingresa una nueva tarea"
        style={{ padding: '10px', width: '200px', marginRight: '10px' }}
      />

      {/* Botón para agregar la tarea */}
      <button
        onClick={handleAddTask}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Agregar Tarea
      </button>

      {/* Lista de tareas */}
      <ul style={{ marginTop: '20px', listStyle: 'none', paddingLeft: '0' }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ padding: '10px 0', fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ marginRight: '20px' }}>{task}</span>
            {/* Botón para eliminar tarea */}
            <button
              onClick={() => handleDeleteTask(index)}
              style={{ padding: '5px 10px', backgroundColor: '#ff4d4f', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
