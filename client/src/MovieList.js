import React, {useState, useEffect} from 'react'
import NewMovie from './NewMovie'

function MovieList() {

  const [newMovieForm, setNewMovieForm] = useState(false)
  const [movieList, setMovieList] = useState([])

  useEffect(()=>{
    fetch('/movies')
    .then((r)=> r.json())
    .then((movieList)=>setMovieList(movieList))
  }, [])
  
  if (!movieList) {
    return <div>Loading...</div>;
  }

  function handleNewMovieForm (){
    setNewMovieForm(!newMovieForm)
  }

 
  function handleAddMovie(newMovie){
    setMovieList([...movieList, newMovie])
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
        <NewMovie onAddMovie={handleAddMovie} />
      ): null}
      {listOfMovies}
    </>
  )
}

export default MovieList