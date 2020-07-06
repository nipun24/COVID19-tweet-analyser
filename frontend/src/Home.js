import React from "react";

const Home = (props) => {
  return (
    <div>
      <button onClick={() => props.history.push("/dashboard")}>
        go to dash
      </button>
      home
    </div>
  );
};
export default Home;
