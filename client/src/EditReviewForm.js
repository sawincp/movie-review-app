import React, {useState} from 'react'

function EditReviewForm({review, movieId, onUpdateReview}) {

    // console.log(review)

    const [prevReview, setPrevReview]= useState(review.review)

    const handleSubmit = (e)=>{
        e.preventDefault()

        const updatedReview = {
            review: {
                review: prevReview
            }
        }

        fetch(`/movies/${movieId}/reviews/${review.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedReview)
        })
        .then((res)=>res.json()).then((updatedReview)=>onUpdateReview(updatedReview))
    }

  return (
    <form onSubmit={handleSubmit}>
        <input
        type='text'
        value={prevReview}
        onChange={(e)=> setPrevReview(e.target.value)}/>
        <button type="submit">Save</button>

    </form>
  )
}

export default EditReviewForm