import React from "react";
import "./Home.css";
import { Typography, makeStyles, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles({
  heading: {
    color: "#121212",
  },
});

const Home = (props) => {
  const classes = useStyles();
  return (
    <div id="background">
      <Grid
        style={{ height: "100%" }}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h3">Heading</Typography>
        <br />
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
