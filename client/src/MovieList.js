import React, {useState} from 'react'
import NewMovie from './NewMovie'

function MovieList({movieList, onAddMovie}) {

  const [newMovieForm, setNewMovieForm] = useState(false)
  
  if (!movieList) {
    return <div>Loading...</div>;
  }

  function handleNewMovieForm (){
    setNewMovieForm(!newMovieForm)
  }

  const listOfMovies = movieList.map(movie => (
    <div key={movie.id}>
      <h3>{movie.title}</h3>
    </div>
  ));


    return (
    <>
      <h1>Movie List</h1>
      <button onClick={handleNewMovieForm}>Add New Movie</button>
      <hr></hr>
      {newMovieForm ?(
        <NewMovie onAddMovie={onAddMovie} />
      ): null}
      {listOfMovies}
    </>
  )
}

export default MovieList