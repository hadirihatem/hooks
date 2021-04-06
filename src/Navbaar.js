
import react,{useState} from 'react' ;
import {Navbar, Nav , Button , FormControl} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
//import Rem from './Rem.js';
 import Add from './Add.js'
import Filter from './Filter.js';
import ReactStars from 'react-stars'






const Navbaar = ({setSearchTerm,addMovie,setRateSearch}) => {
  const [search, setsearch] = useState(" ")
  const onChange = e =>{
    e.preventDefault();
    setsearch(e.target.value);
  }
  

  
 
    

  return (
    <div>
      <Navbar bg="dark" variant="dark">
     
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Moviecart</Nav.Link>
      <Nav.Link href="#pricing">Movielist</Nav.Link>
    

      <Add addMovie={addMovie}/>
       <Filter setSearchTerm={setSearchTerm} /> 

   
    </Nav>


 
 
    { <Form inline>

      <FormControl type="text" placeholder="Search for movie"  onChange={event =>{setSearchTerm(event.target.value)}}  className="mr-sm-2" />

      <ReactStars
    count={5}
    
    size={24}
    onChange={(value)=>setRateSearch(value)}
    edit={true}
    color2={'#ffd700'} 
  />

    </Form>}
  </Navbar>
    </div>
  )
}

export default Navbaar
