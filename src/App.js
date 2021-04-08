import './App.css';
import Navbaar from './Navbaar.js'
import MovieList from './MovieList.js'
import react,{useState } from "react" ;
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

import data from './Data'
import Newcard from './Newcard';




const App = () => {
  
  const [movies, setMovies] = useState(data)
    
     

    const addMovie=(newMovie)=>{
      setMovies([...movies,newMovie])
    }
    const [searchTerm, setSearchTerm] = useState("");


   const [rateSearch, setRateSearch] = useState(1)

  


  return (
    <div className='App'>
    <Router>
   <Navbaar addMovie={addMovie} setSearchTerm={setSearchTerm} setRateSearch={setRateSearch}/>
      <Switch>
        <Route exact path="/" render={()=><MovieList movie={movies.filter(movie=>movie.title.toLowerCase().trim().includes(searchTerm.toLowerCase().trim()) && movie.rate>=rateSearch)}/>} />
        <Route path={`/:id`} render={(props)=><Newcard {...props} movies={movies} />} />
      </Switch>

   {/* <MovieList movie={movies.filter(movie=>movie.title.toLowerCase().trim().includes(searchTerm.toLowerCase().trim()) && movie.rate>=rateSearch)}/> */}
   
     
 

    </Router>
    </div>
  )
}

export default App












