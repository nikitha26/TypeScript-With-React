import React,{useState} from 'react'

function LogedIn() {
    const [login,setLogIn ] = useState(false)
    const handleLogin = () => {
      setLogIn(true);
    }
    const handleLogOut = () => {
      setLogIn(false);
    }
  return (
    <div>
        <button onClick={handleLogin}>LogIn</button>
        <button onClick={handleLogOut}>LogOut</button>
        <h6>User is {login?'Login':'LogedOut'}</h6>
    </div>
  )
}

export default LogedIn