import React, {useState} from 'react'
import EditReviewForm from './EditReviewForm'

function Review({review, username, movieId, onUpdateReview, onDeleteReview}) {

  const [error, setError]= useState(null)
  const [isEditing, setIsEditing]= useState(false)
  
  
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

  const handleUpdateReview = (updatedReview)=>{
    onUpdateReview(updatedReview)
    setIsEditing(false)
  }

    return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
        <p>{review.review}</p>
        <p>Reviewer: {username}</p>
        <button onClick={handleDeleteReview}>
          <span role="img" aria-label="delete">
              🗑
          </span>
        </button>
        <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
            <span role="img" aria-label="edit">
              ✏️
            </span>
          </button>
          {isEditing? (
            <EditReviewForm
            review={review}
            movieId={movieId}
            onUpdateReview={handleUpdateReview} />
          ): null}
    </div>
  )

}

export default Review