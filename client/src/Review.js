import React, {useState} from 'react'

function Review({review, movieId, onDeleteReview}) {

  const [error, setError]= useState(null)
  
  const handleDeleteReview = () =>{
    fetch(`/movies/${movieId}/reviews/${review.id}`, {
      method: 'DELETE',
    })
    .then((r)=>{
      if(!r.ok){
        throw new Error(`Error deleting review: ${r.statusText}`)
      }
      onDeleteReview(review.id)
    })
    .catch((error) => {setError(error.message)});
  }

    return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
        <p>{review.review}</p>
        <button onClick={handleDeleteReview}>
          <span role="img" aria-label="delete">
              🗑
          </span>
        </button>
    </div>
  )

}

export default Review