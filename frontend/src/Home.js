import React from "react";
import "./Home.css";
import { Typography, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  button: {
    // borderRadius: 100,
    marginTop: 320,
    marginLeft: 670,
  },
  heading: {
    color: "black",
  },
});

const Home = (props) => {
  const classes = useStyles();
  return (
    <div styles={{}}>
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
    </div>
  );
};

export default Home;
