import React, {useState} from 'react'
import NewMovie from './NewMovie'

function MovieList({movies, onAddMovie}) {

  const [newMovieForm, setNewMovieForm] = useState(false)
  
  if (!movies) return(<p>"Loading..."</p>)

  function handleNewMovieForm (){
    setNewMovieForm(!newMovieForm)
  }

    const listOfMovies = movies.map(movie =>
      <p key={movie.id}>{movie.title}</p>)

    return (
    <div>
      <h1>Movie List</h1>
      <button onClick={handleNewMovieForm}>Add New Movie</button>
      <hr></hr>
      {newMovieForm ?(
        <NewMovie onAddMovie={onAddMovie} />
      ): null}
      {listOfMovies}
    </div>
  )
}

export default MovieList