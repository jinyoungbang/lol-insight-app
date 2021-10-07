import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import {
  convertKeyToName,
  convertDataToGraphFormat,
} from "./helpers/functions";

import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: "0 auto",
      width: "850px"
    },
    titleText: {
      color: "#1d1a27",
      fontFamily: '"Inter", sans-serif',
      fontSize: "20px",
      fontWeight: "500",
      textAlign: "left",
      marginBottom: "30px",
    },
  })
);

const TrendsChart = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.titleText}>{convertKeyToName(props.title)}</div>
      <ResponsiveContainer
        style={{ marginBottom: "20px" }}
        height={400}
        width="100%"
      >
        <BarChart
          height={300}
          data={convertDataToGraphFormat(props.data)}
          layout="vertical"
          // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis type="number" scale="linear" />
          <YAxis
            type="category"
            dataKey="name"
            interval={0}
            tickSize={0}
            height={100}
            width={150}
          />
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Tooltip />
          <Bar dataKey="weight" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendsChart;
