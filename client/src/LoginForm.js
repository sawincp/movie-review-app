import React, {useContext, useState} from 'react'
import { CurrentUserContext } from './App'

function LoginForm() {
    const {setCurrentUser}= useContext(CurrentUserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    
    function handleSubmit(e){
        e.preventDefault()
        setIsLoading(true)
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r)=>{
            setIsLoading(false)
            if(r.ok){
                r.json().then((user)=>{
                    setCurrentUser(user)
                    setUsername('')
                    setPassword('')
                    setErrors([])
                }) 
            } else{
                r.json().then((err)=> setErrors(err.errors))
            }
        })
    }
  return (
    <form onSubmit={handleSubmit}>
        <h3>Username</h3>
        <input
        type="text"
        id="username"
        autoComplete='off'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        />
        
        <h3>Password</h3>
        <input
        type='password'
        id= 'password'
        autoComplete='current-password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />
        <button variant="fill" type='submit'>
            {isLoading ? "Loading...": "Login"}
        </button>
         {errors.map((err) => (
          <h1 key={err}>{err}</h1>
        ))}

    </form>
  )
}

export default LoginForm