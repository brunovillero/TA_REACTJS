import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error al obtener los usuarios:', error)
        setLoading(false)
      })
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lista de Usuarios</h1>

      {/* Mostrar mensaje de carga mientras se obtienen los datos */}
      {loading ? (
        <p>Cargando usuarios...</p>
      ) : (
        <ul>
          {/* Renderizar cada usuario en una lista */}
          {users.map(user => (
            <li key={user.id} style={{ marginBottom: '15px', listStyle: 'none' }}>
              <strong>Nombre de usuario:</strong> {user.username} <br />
              <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
