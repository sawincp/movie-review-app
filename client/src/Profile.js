import React, {useContext} from 'react'
import { CurrentUserContext } from './App'
import NavBar from './NavBar'


function Profile() {
    const {currentUser}= useContext(CurrentUserContext)
  
    return (
    <div>Profile
        <NavBar/>

        <h1>Hi!{currentUser.id}</h1>



    </div>
  )
}

export default Profile