import React from 'react'

function MovieList({movies}) {
    if (!movies) return("Loading...")

    const listOfMOvies = movies.map(movie =>
        <p key={movie.id}>{movie.title}</p>)

  return (
    <div>MovieList
        {listOfMOvies}
    </div>
  )
}

export default MovieList