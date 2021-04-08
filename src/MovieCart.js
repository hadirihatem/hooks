import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './App.css';
import {Link} from 'react-router-dom'



import ReactStars from 'react-stars'


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));


    export default function MovieCart({movie}) {
        const classes = useStyles();
        
        return (
        <Link to={`/${movie.id}`} >
         <div className='App-header'>
         <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {movie.fl}
                </Avatar>
              }
             
              title={movie.title}
            
            />
            <CardMedia
              className={classes.media}
              image={movie.image}
              
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {movie.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              
   

        <ReactStars
              className={"cartRate"}
    count={5}
   
    size={24}
    value={movie.rate}
    edit={false}
   
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
  </CardActions>
  </Card>


  </div>
  </Link>
          
          

        );
      }
      

