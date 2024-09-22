import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const UserInput = () => {
  const { setUsername } = useContext(UserContext) 

  const handleInputChange = (e) => {
    setUsername(e.target.value)
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="Escribe tu nombre" 
        onChange={handleInputChange}
        style={{ padding: '8px', fontSize: '16px' }}
      />
    </div>
  )
}

export default UserInput
