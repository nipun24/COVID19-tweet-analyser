import React from "react";
import { ResponsiveLine } from "@nivo/line";

const LineChart = ({ data }) => (
  <ResponsiveLine
    data={data}
    // margin={{ top: 10, right: 100, bottom: 10, left: 10 }}
    margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
    xScale={{ type: "linear" }}
    yScale={{ type: "linear" }}
    curve="monotoneX"
    // axisTop={null}
    enableGridX={true}
    enableGridY={true}
    colors={{ scheme: "dark2" }}
    lineWidth={1}
    pointSize={4}
    theme={{
      textColor: "rgba(255,255,255,.6)",
      fontFamily: "Roboto",
      tooltip: {
        container: {
          backgroundColor: "#121212",
          background:
            "linear-gradient(rgba(255,255,255,.24), rgba(255,255,255,.24))",
        },
      },
      legends: {
        text: {
          fill: "#rgba(255,255,255,.6)",
        },
      },
    }}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 2,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 12,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(255, 255, 255, .5)",
      },
    ]}
  />
);

export default LineChart;
