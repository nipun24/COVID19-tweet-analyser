// import React from "react";
// // import { Paper } from "@material-ui/core";

// const Home = (props) => {
//   return (
//     <div style={{ overflow: "hidden" }}>
//       {/* <Paper onClick={() => props.history.push("/dashboard")}>Home</Paper> */}
//       <video id="bg-video" loop autoPlay>
//         <source src="./assets/bg-video.mp4" type="video/mp4" />
//       </video>
//     </div>
//   );
// };

import React from 'react'
import ReactPlayer from 'react-player'
import screenfull from 'screenfull'

const Home = (props) => {
    return (
        <ReactPlayer 
        // url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        // url='https://youtu.be/I-Yd-_XIWJg?start=182&end=267'
        url='https://youtu.be/9Uq2RJQUvew'
        loop = {true}
        width='100%'
        height='100%'
        playing = {true}
        />
        // screenfull.request(url)
    )

    }
export default Home
