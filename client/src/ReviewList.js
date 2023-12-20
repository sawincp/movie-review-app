import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import NewReview from './NewReview'
import Review from './Review'

function ReviewList({movieList, onUpdateUser, onAddReview, onUpdateReview, onDeleteReview}) {
  
  const [newReviewForm, setNewReviewForm] = useState(false)
  const params = useParams()
  const movieId = Number(params.id)
  const movie = movieList.find((movie)=> movie.id === movieId)

  // console.log("Movie Reviews: ", movie)


  if(!movie){return <div>Loading...</div>}

    function handleNewReviewForm (){
      setNewReviewForm(!newReviewForm)
    }

    const handleDeleteReview = (reviewId) =>{
      onDeleteReview(movieId, reviewId)
    }

    const handleUpdateReview = (reviewId) =>{
      onUpdateReview(movieId, reviewId)
    }

    const movieReviews = movie.reviews.map((review)=>(
      <Review
        key={review.id}
        review={review}
        username ={review.username}
        movieId={movieId}
        onUpdateUser={onUpdateUser}
        onDeleteReview={handleDeleteReview}
        onUpdateReview={handleUpdateReview}
        />
    ))
   
    return (
    <div>
        <h1>Reviews For {movie.title}</h1>
        <hr />
        <button onClick={handleNewReviewForm}>Add Review</button>
        {newReviewForm ? (
          <NewReview onAddReview={onAddReview} onUpdateUser={onUpdateUser} />
        ): false}
        {movieReviews}
       
    </div>
  )
}

export default ReviewList