import React, { useState } from 'react'

type AuthUser = {
    name:string,
    email:string
}

export default function User() {
    // const [user,setUser] = useState<AuthUser | null>(null);    //We can specify the intial value and future value
                                                                  //In our case initial value is null and furtrue value is object with user values

    //Type Assertion                                                              
    const [user, setUser] = useState<AuthUser>({} as AuthUser)                                                            
    const handleLogin = () => {                                  
      setUser({
        name:'John',
        email:'john@email.com'
      })
    }
    const handleLogout = () => {
       setUser({} as AuthUser);
    }
    console.log(user);
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>LogOut</button>
        <div>User name is {user.name}</div>
        <div>User email is {user.email}</div>
    </div>
  )
}
