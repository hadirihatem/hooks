import React from 'react'
import Modal from 'react-modal';
import {Button , Form } from 'react-bootstrap'
import react,{useState} from 'react' ;
import { v4 as uuidv4 } from "uuid";





const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };



const Add = ({addMovie}) => {
    var subtitle;
    const [modalIsOpen,setModalIsOpen] = useState(false);
    function openModal() {
        setModalIsOpen(true);
    }
   
  
    const closeModal=()=> {
        setModalIsOpen(false);
    }
   
    const[newMovie,setNewMovie]=useState({
        id:uuidv4(),
        title:"",
        description:"",
        fl:"",
        url:"",
        rate:1
    })
    const change=(e)=> 
    setNewMovie({...newMovie,[e.target.name]:e.target.value})
    
    
const save = () => {
    addMovie(newMovie);
    setNewMovie({
        id:uuidv4(),
        title:"",
        description:"",
        fl:"",
        
        rate:1,
        url:""
    })
    closeModal()
}
    return (
        <div>
             <Button variant="outline-info" onClick={openModal}>ADD </Button>
          <Modal
            isOpen={modalIsOpen}
            
            onRequestClose={closeModal}
            style={customStyles}
          >
   
           
            <form>

               <label  style={{marginRight: 10}}>Title</label>

              <input type='text' name='title'   onChange={change} />
              
              <br/>

              <label  style={{marginRight: 10}}>url</label>

              <input type='text' name='url'   onChange={change} />

            <br/>


              <label style={{marginRight: 10}}>Description</label>

              <input type='text' name='description'  onChange={change}   />
              <br/>

              <label style={{marginRight: 10}}>Fl</label>

              <input type='text' name='fl'  onChange={change}  />
              <br/>

              <label style={{marginRight: 10}}>Rate</label>

              <input type='text' name='rate' onChange={change}  />


            </form>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="outline-info" onClick={save}>submision</Button>

          </Modal>
        </div>
    )
}

export default Add
