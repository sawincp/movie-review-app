import { useState, useEffect, createContext } from "react";
import { Routes, Route} from "react-router-dom"
import NavBar from "./NavBar";
import Login from "./Login";
import Profile from "./Profile";
import MovieList from "./MovieList";
import ReviewList from "./ReviewList";

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
    .then((r)=>r.json())
    .then((movieList)=>setMovieList(movieList))
  }, [])


  function handleAddMovie(newMovie) {
    setMovieList((previousMovies) => [...previousMovies, newMovie]);
  }

  function handleAddReview(newReview) {
    setMovieList((previousMovies) => {
      const updatedMovies = previousMovies.map((movie) => {
        if (movie.id === newReview.movie_id) {
          return {
            ...movie,
            reviews: [...movie.reviews, newReview],
          };
        }
        return movie
      });
      return updatedMovies;
    });
  }

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      {currentUser ? (
        <div>
          <NavBar/>
        <Routes>
          <Route exact path="/" element= {<Profile />}/>
          <Route exact path="/movies" 
          element= {<MovieList movieList={movieList} onAddMovie={handleAddMovie} />}/>
          <Route path="/movies/:id/reviews"
          element= {<ReviewList movieList={movieList} onAddReview={handleAddReview} />} />
        </Routes>
        </div>
      ) : (
        <Login />
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
