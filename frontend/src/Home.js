import React from 'react';
import './Home.css'
import { Typography, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  button: {
    borderRadius: 100,
    marginTop:320,
    marginLeft:670,
  },
  heading:{
    color:"black"
  }
})
export default function Home() {
  const classes = useStyles();
    return(
        <div className={classes.button}>
          <Typography 
            className={classes.heading}
            variant='h3'
          >
            Heading
          </Typography>
          <Button 
            variant="contained"
            color="primary"
          >
            Go to Dashboard
          </Button>
          
        </div>
    )
}
