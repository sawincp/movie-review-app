import { useState, useEffect, createContext } from "react";
import { Routes, Route} from "react-router-dom"

import Login from "./Login";
import Profile from "./Profile";
import MovieList from "./MovieList";

export const CurrentUserContext = createContext(null)

function App() {
  const [currentUser, setCurrentUser]= useState(null)
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => setCurrentUser(currentUser));
      }
    });
  }, []);

  useEffect(()=>{
    fetch('/movies')
    .then((r)=> r.json())
    .then((movieList)=>setMovieList(movieList))
  }, [])

  function handleAddMovie(newMovie){
    setMovieList([...movieList, newMovie])
  }
  
  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      {currentUser ? (
        <Routes>
          <Route exact path="/" element= {<Profile />}/>
          <Route exact path="/movies" 
          element= {<MovieList movies={movieList} onAddMovie={handleAddMovie}/>}/>
        </Routes>
      ) : (
        <Login />
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
