import React, {useState} from 'react'
import {useParams} from 'react-router-dom'

function NewReview({ onAddReview, onUpdateUser}) {

  const {id: movieID}= useParams()
  const [review, setReview]= useState('')
  const [errors, setErrors]= useState([])
  const [isLoading, setIsLoading]= useState(false)

  function handleSubmit(e){
    e.preventDefault()
    setIsLoading(true)

    const newReview = {
      review: {
        movie_id: parseInt(movieID),
        review: review
      }
    }

    fetch(`/movies/${movieID}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview)
    }).then((r)=>{
      setIsLoading(false)
      if(r.ok){
        setReview('')
        setErrors([])
        r.json().then((data)=>{
          onAddReview(data)
          onUpdateUser(data)
        })
      }else{
        r.json().then((err)=>setErrors(err.errors))
      }
    })

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        type='text'
        id= 'content'
        placeholder='Enter Your Review'
        value={review}
        onChange={(e)=>{setReview(e.target.value)}}/>
        <button varriant= 'fill' type='submit'>
          {isLoading ? "Loading...": "Submit"}
        </button>
        {errors.map((err)=>(
          <h1 key={err}>{err}</h1>
        ))}
      </form>
    </div>
  )
}

export default NewReview