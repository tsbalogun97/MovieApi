import "./App.css";
import { useState, useEffect } from "react";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
  const apiKey= "e6e57353"
// --------------------------{APIKEY DATA}

const [movie,setMovie] = useState("")

// --------------------------{STATE}

const getMovie = async(searchTerm)=>{

  const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
// ----- go to the site and search for Title

  
const data = await response.json()
// ----turn Info Json format

setMovie(data)
// ----------> Take retrieved data and set it as current Movie

}

//-------------------------[ Function that uses async-await to fetch movie data]

  return (
    <div className="App">
      <Form moviesearch={getMovie} />

      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
