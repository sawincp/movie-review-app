import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import NewReview from './NewReview'

function ReviewList({movieList, handleAddReview}) {
  
  const [newReviewForm, setNewReviewForm] = useState(false)
  const params = useParams()
  const movieId = Number(params.id)
  const movie = movieList.find((movie)=> movie.id === movieId)

  if(!movie){return <div>Loading...</div>}

  const {reviews}= movie

    function handleNewReviewForm (){
      setNewReviewForm(!newReviewForm)
    }

  
    return (
    <div>
        <h1>Reviews For {movie.title}</h1>
        <hr />
        <button onClick={handleNewReviewForm}>Add Review</button>
        {newReviewForm ? (
          <NewReview handleAddReview={handleAddReview} />
        ): null}
        {reviews ? (
           <ul>
           {reviews.map((review)=>(
             <li key={review.id}>
               Review: {review.content}
             </li>
           ))}
         </ul>

        ): <p>No Reviews For this Moive</p>}
       

    </div>
  )
}

export default ReviewList