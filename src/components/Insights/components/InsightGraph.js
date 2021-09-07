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

const data = [
  {
    name: "Match 0",
    kda: 1.4
  },
  {
    name: "Match 1",
    kda: 2.0
  },
  {
    name: "Match 2",
    kda: 11.0
  },
  {
    name: "Match 3",
    kda: 0.82
  },
  {
    name: "Match 4",
    kda: 1.0
  },
  {
    name: "Match 5",
    kda: 3.65
  },
  {
    name: "Match 6",
    kda: 4
  },
];

const InsightGraph = (props) => {
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
              dataKey="kda"
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
