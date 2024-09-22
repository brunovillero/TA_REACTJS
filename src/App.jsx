import './App.css'
import { UserProvider } from './contexts/UserContext'
import  UserProfile  from './components/UserProfile'

function App() {
  return (
    <UserProvider>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Bienvenido</h1>
        <UserProfile />
      </div>
    </UserProvider>
  )
}

export default App
