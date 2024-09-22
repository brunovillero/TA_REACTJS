import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const UserProfile = () => {
  const { username } = useContext(UserContext) // Obtener el nombre del usuario desde el contexto

  return (
    <div>
      <h2>Usuario: {username}</h2>
    </div>
  )
}

export default UserProfile
