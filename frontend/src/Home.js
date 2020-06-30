import React from "react";
import { Paper } from "@material-ui/core";

const Home = (props) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Paper onClick={() => props.history.push("/dashboard")}>Home</Paper>
      <video id="bg-video" loop autoPlay>
        <source src="./assets/bg-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
