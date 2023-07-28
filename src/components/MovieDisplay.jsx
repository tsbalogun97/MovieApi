import React from 'react'

function MovieDisplay(props) {
  if (props.movie === "") {
    return <h1>Nothing to Display</h1>
      
  }
  return (
    <div>
      <h1>{props.movie.Title}</h1>
      <h1>{props.movie.Year}</h1>
      <h1> Rated: {props.movie.Rated}</h1>
      <hr/>
      <img src={props.movie.Poster} />
      <h3>{props.movie.Actors}</h3>
      <hr/>
      <h2> Awarded: {props.movie.Awards}</h2>


    </div>
  )
}

export default MovieDisplay
