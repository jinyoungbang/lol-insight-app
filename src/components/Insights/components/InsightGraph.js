import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



const InsightGraph = (props) => {
  const data = props.data.data.map((val, i) => ({
    "name": "Most Recent Match #" + i.toString(),
    [props.data.statsName]: val
  })).reverse();

  return (
      <ContentContainer>
        <ResponsiveContainer  width="100%">
          <LineChart
            width={500}
            height={100}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name"  tick={false} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey={props.data.statsName}
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
        </ResponsiveContainer>
      </ContentContainer>
  );
};

const ContentContainer = styled.div`
  width: 95%;
  min-width: 70%;
  height: 150px;
  flex-direction: row;
  display: flex;
`;

export default InsightGraph;
