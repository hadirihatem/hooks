import React from "react";
import MovieList from "./MovieList";
import { Link } from "react-router-dom";
import { useState } from "react";
import './App.css';
import Data from './Data.js';



const Newcard = ({movies,match,data}) => {
  
    
  
    /* const newarray=movies.filter((el)=>match.params.id===el.id) */
  const  newarray=movies.find((el) => el.id.toString() === match.params.id);


  return (
    <div className='App-header' >
    {newarray.title}
         
      <iframe
        width="853"
        height="480"
        src={newarray.url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
        
      </iframe>
                

    </div>
  );
};

export default Newcard;






