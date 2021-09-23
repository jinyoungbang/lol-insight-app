import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const InsightGraph = (props) => {
  const data = props.data.data
    .map((val, i) => ({
      name: "Most Recent Match #" + i.toString(),
      [props.data.statsName]: val,
      win: props.win[i],
      userRole: props.userRole[i],
      championName: props.championNames[i],
      kills: props.kills[i],
      deaths: props.deaths[i],
      assists: props.assists[i],
    }))
    .reverse();

  return (
    <ContentContainer>
      <GraphTitle>{props.data.statsNameForRender}</GraphTitle>
      <ResponsiveContainer style={{ marginBottom: "20px" }} width="100%">
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
          <XAxis dataKey="name" tick={false} />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          {/* <Legend /> */}
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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const championName = payload[0].payload.championName;
    const userRole = payload[0].payload.userRole;
    const kills = payload[0].payload.kills;
    const deaths = payload[0].payload.deaths;
    const assists = payload[0].payload.assists;

    let isPercentage = false;
    const percentageValues = ["dmgPercentage", "killParticipation"];

    if (percentageValues.includes(payload[0].name)) isPercentage = true;

    if (payload[0].payload.win) {
      return (
        <WinTooltipContainer>
          <MatchDataContainer>
            <ChampionImage>
              <img
                style={{
                  height: "100%",
                  width: "100%",
                }}
                src={`${process.env.REACT_APP_ASSETS_ENDPOINT}img/champion/${championName}.png`}
                alt={championName}
              />
            </ChampionImage>
            <MatchInfo>
              <WinText>Victory</WinText>
              <ChampionNameText>
                {championName} / {userRole}{" "}
              </ChampionNameText>
              <KDAText>
                {kills} / {deaths} / {assists}
              </KDAText>
            </MatchInfo>
          </MatchDataContainer>
          {isPercentage ? (
            <TooltipDataText>{`${payload[0].name} : ${payload[0].value}%`}</TooltipDataText>
          ) : (
            <TooltipDataText>{`${payload[0].name} : ${payload[0].value}`}</TooltipDataText>
          )}
        </WinTooltipContainer>
      );
    } else {
      return (
        <DefeatTooltipContainer>
          <MatchDataContainer>
            <ChampionImage>
              <img
                style={{
                  height: "100%",
                  width: "100%",
                }}
                src={`${process.env.REACT_APP_ASSETS_ENDPOINT}img/champion/${championName}.png`}
                alt={championName}
              />
            </ChampionImage>
            <MatchInfo>
              <DefeatText>Defeat</DefeatText>
              <ChampionNameText>
                {championName} / {userRole}{" "}
              </ChampionNameText>
              <KDAText>
                {kills} / {deaths} / {assists}
              </KDAText>
            </MatchInfo>
          </MatchDataContainer>
          {isPercentage ? (
            <TooltipDataText>{`${payload[0].name} : ${payload[0].value}%`}</TooltipDataText>
          ) : (
            <TooltipDataText>{`${payload[0].name} : ${payload[0].value}`}</TooltipDataText>
          )}
        </DefeatTooltipContainer>
      );
    }
  }

  return null;
};

const WinTooltipContainer = styled.div`
  background-color: #b1d8fc;
  padding: 10px;
  border: 1px solid #958bb6;
  display: flex;
  width: 190px;
  flex-direction: column;
`;

const DefeatTooltipContainer = styled.div`
  background-color: #ffcbcb;
  padding: 10px;
  border: 1px solid #958bb6;
  display: flex;
  width: 190px;
  flex-direction: column;
`;

const MatchDataContainer = styled.div`
  background: inherit;
  width: 100%;
  flex-direction: row;
  display: flex;
  margin-bottom: 10px;
`;

const ChampionImage = styled.div`
  position: relative;
  border: 1px solid #1d1a27;
  border-radius: 2px;
  height: 50px;
  width: 50px;
  margin-right: 10px;
`;

const MatchInfo = styled.div`
  display: flex;
  flex-direction: column;
  ${"" /* margin-left: 24px; */}
`;

const WinText = styled.div`
  color: #5f69de;
  text-align: left;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 700;
  ${"" /* margin-top: 2px; */}
  margin-bottom: 2px;
`;

const DefeatText = styled.div`
  color: #e35951;
  text-align: left;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 700;
  ${"" /* margin-top: 2px; */}
  margin-bottom: 2px;
`;

const ChampionNameText = styled.div`
  color: #1d1a27;
  text-align: left;
  font-family: "Inter", sans-serif;
  font-size: 10px;
  font-weight: 400;
  ${"" /* margin-top: 2px; */}
  margin-bottom: 4px;
`;

const KDAText = styled.div`
  color: #1d1a27;
  text-align: left;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
`;

const TooltipDataText = styled.div`
  color: #1d1a27;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin-top: 2px;
  margin-bottom: 5px;
`;

const GraphTitle = styled.div`
  color: #635bff;
  text-align: left;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin-left: 79px;
  margin-bottom: 15px;
`;

const ContentContainer = styled.div`
  width: 95%;
  min-width: 70%;
  height: 150px;
  flex-direction: column;
  display: flex;
`;

export default InsightGraph;
