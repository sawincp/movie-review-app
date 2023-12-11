import React, {useContext} from 'react'
import { CurrentUserContext } from './App'


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
    <div>
        <h1>Hi!{currentUser.username}</h1>
        <button onClick={handleLogOutClick}>Logout</button>
    </div>
  )
}

export default Profile