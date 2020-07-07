import React, { Component } from 'react';
import './Home.css'
import { Typography, makeStyles, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    heading:{
      color:"black"
    }
  })

export default function Home() {
  const classes = useStyles();
    return(
        <div id = "gg" >
            <Grid
                style={{ height: "90vh" }}
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
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
          </Grid>
        </div>
    )
}
