import React from "react";
import "./Home.css";
import { Typography, makeStyles, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles({
  heading: {
    color: "black",
  },
});

const Home = (props) => {
  const classes = useStyles();
  return (
    <div id="background">
      <Grid
        style={{ height: "90vh" }}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography className={classes.heading} variant="h3">
          Heading
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.history.push("/dashboard")}
        >
          Go to Dashboard
        </Button>
      </Grid>
    </div>
  );
};

export default Home;
