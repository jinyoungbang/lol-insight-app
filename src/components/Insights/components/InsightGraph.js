import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



const InsightGraph = (props) => {
  const data = props.data.data.map((val, i) => ({
    "name": "Match " + i.toString()
  }))
  console.log(data);
  return (
    <InsightGraphContainer>
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
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
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
    </InsightGraphContainer>
  );
};

const InsightGraphContainer = styled.div`
  flex-direction: row;
  display: flex;
`;

const ContentContainer = styled.div`
  margin: 0 100px;
  width: 100%;
  height: 200px;
  flex-direction: row;
  display: flex;
`;

export default InsightGraph;
