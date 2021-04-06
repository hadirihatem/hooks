import React from 'react'
import MovieCart from './MovieCart.js'

const MovieList = ({movie}) => {
    return (
        <div>
          {movie.map(el=><MovieCart movies={el} key={movie.id}/>)}  
          
        </div>
    )
}

export default MovieList
