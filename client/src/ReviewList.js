import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import NewReview from './NewReview'
import Review from './Review'

function ReviewList({movieList, onAddReview, onDeleteReview}) {

  
  const [newReviewForm, setNewReviewForm] = useState(false)
  const params = useParams()
  const movieId = Number(params.id)
  const movie = movieList.find((movie)=> movie.id === movieId)


  if(!movie){return <div>Loading...</div>}

    function handleNewReviewForm (){
      setNewReviewForm(!newReviewForm)
    }

    const handleDeleteReview = (reviewId) =>{
      onDeleteReview(movieId, reviewId)
    }


    const movieReviews = movie.reviews.map((review)=>(
      <Review
        key={review.id}
        review={review}
        //new line
        movieId={movieId}
        onDeleteReview={handleDeleteReview} />
    ))

  
    return (
    <div>
        <h1>Reviews For {movie.title}</h1>
        <hr />
        <button onClick={handleNewReviewForm}>Add Review</button>
        {newReviewForm ? (
          <NewReview onAddReview={onAddReview} />
        ): false}
        {movieReviews}
       
    </div>
  )
}

export default ReviewList