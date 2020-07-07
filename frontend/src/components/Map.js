import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
  const [viewport, setViewPort] = useState({
    latitude: 20,
    longitude: 78,
    zoom: 5,
    height: "500px",
    width: "500px",
  });
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API}
        onViewportChange={(viewport) => setViewPort(viewport)}
      ></ReactMapGL>
    </div>
  );
};

export default Map;
