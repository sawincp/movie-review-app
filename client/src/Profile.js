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

    console.log("Current User:", currentUser)
    
    // const myMovies= currentUser.movies.map((movie)=> <li key={movie.id}>{movie.title}</li>)

    const myMovies =
    currentUser && currentUser.movies ? (
      currentUser.movies.map((movie) => <li key={movie.id}>{movie.title}</li>)
    ) : (
      <p>Loading movies...</p>
    );
    
    return (
    <div>
        <h1>Hi! {currentUser.username}</h1>
        <hr></hr>
        <h3>My Movies:</h3>
        <ul>{myMovies}</ul>
        <button onClick={handleLogOutClick}>Logout</button>
    </div>
  )
}

export default Profile