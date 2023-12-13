import React, {useState} from 'react'

function EditReviewForm({review, movieId, onUpdateReview}) {

    
    const [prevReview, setPrevReview]= useState(review.review)
    const [error, setError]= useState(null)
    
    const handleSubmit = (e) => {
        e.preventDefault();
      
        const updatedReview = {
          review: {
            review: prevReview,
          },
        };
      
        fetch(`/movies/${movieId}/reviews/${review.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedReview),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error(`Error updating review: ${res.statusText}`);
            }
            return res.json(); 
          })
          .then((updatedReview) => {
            onUpdateReview(updatedReview);
            setError(null); 
          })
          .catch((error) => {
            setError(error.message);
          });
      };
  return (
    <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <p>Edit Review:</p>
        <input
        type='text'
        value={prevReview}
        onChange={(e)=> setPrevReview(e.target.value)}/>
        <button type="submit">Save</button>

    </form>
  )
}

export default EditReviewForm