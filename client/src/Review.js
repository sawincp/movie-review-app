import React from 'react'

function Review({review, onDeleteReview}) {

  const handleDeleteReview = () =>{
    onDeleteReview(review.id)
  }

    return (
    <div>
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