import React from 'react';
import './Home.css'
import { Typography, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  button: {
    borderRadius: 100
  },
  heading:{
    marginLeft:550,
    marginTop:350,
  }
})
export default function Home() {
  const classes = useStyles();
    return(
        <div>
          <Typography 
            className={classes.heading}
            variant='h3'
          >
            Heading Here
          <Button 
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Go to Dashboard
          </Button>
          </Typography>
          
        </div>
    )
}
