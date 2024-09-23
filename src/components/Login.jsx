import { useEffect } from "react"

export default function Login() {

  useEffect(() => {
    localStorage.removeItem('token')
  }, [])
  
  const handleClick = () => {
    localStorage.setItem('token', '123456789')
    window.location.href = '/dashboard'
  }
  
  return (
    <div className="Login">
        <h1>Login</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button onClick={handleClick}>Login</button>
    </div>
  )
}