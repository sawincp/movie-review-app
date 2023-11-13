import React, {useContext} from 'react'
import { CurrentUserContext } from './App'
import NavBar from './NavBar'


function Profile() {
    const {currentUser, setCurrentUser}= useContext(CurrentUserContext)

    function handleLogOutClick (){
      fetch('/logout', { method: 'DELETE'}).then((r)=> {
        if (r.ok){
          setCurrentUser(null)
        }
      })
    }
  
    return (
    <div>Profile
        <NavBar/>

        <h1>Hi!{currentUser.id}</h1>
        <button onClick={handleLogOutClick}>Logout</button>
    </div>
  )
}

export default Profile