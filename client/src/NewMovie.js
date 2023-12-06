import React, { useState } from 'react'

function NewMovie({ onAddMovie }) {
    const [title, setTitle]=useState('')
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true)
       
        const newMovie = { title: title };
        
        fetch("/movies", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({movie: newMovie}),
        }).then((r) => {
          setIsLoading(false)
          if (r.ok) {
            setTitle("")
            setErrors([])
            onAddMovie(newMovie)
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
          
        });
      }


  return (
    <div>
        <h1>New Movie</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            id='id'
            placeholder='Enter movie name...' 
            value={title} 
            onChange={(e)=>{setTitle(e.target.value)}} />
            <button variant="fill" type='submit'>
            {isLoading ? "Loading...": "Submit"}
        </button>
         {errors.map((err) => (
          <h1 key={err}>{err}</h1>
        ))}
        </form>
    </div>
  )
}

export default NewMovie