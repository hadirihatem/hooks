import { v4 as uuidv4 } from "uuid";

const data=[
    { id:uuidv4(),
      title : "intersteller", 
      fl:"I",
      url:"https://www.youtube.com/embed/tFMo3UJ4B4g",
    image: "/interstellar.jpg",
    rate:1,
    description:"Interstellar is a 2014 epic science fiction film directed and produced by Christopher Nolan. It stars Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn, John Lithgow, Michael Caine, and Matt Damon. Set in a dystopian future where humanity is struggling to survive, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for mankind",},
    
    { id:uuidv4(),
      title : "ghost rider",
      fl:"G",
      url:"https://www.youtube.com/embed/QvoofruuWk8",
      rate:4,
    image: "/ghost.jpg",
    description:"The new Ghost Rider is motorcycle stuntman Johnny Blaze, who, upon learning that his foster father is afflicted with a terminal disease, sells his soul to a demon named Mephisto in exchange for a cure. Blaze's foster father is cured but soon dies in a motorcycle accident ",},
    
    { id:uuidv4(),
      title : "the Arrival",
      fl:"A", 
      url:"https://www.youtube.com/embed/tFMo3UJ4B4g",
      rate:3,
    image: "/Arrival.jpg",
    description:"The Arrival tells a universal story of immigration. The story is about a man leaving his home to find work and support his family, whose home has apparently become unsafe. In the new land, the man goes through a lengthy administrative process and manages to find a small living space",}
    


  ]
  export default data 