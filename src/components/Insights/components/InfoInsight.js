import React from "react";
import styled from "styled-components";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import InsightGraph from "./InsightGraph";

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "#1890ff",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#40a9ff",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: "#f5f9fc",
  },
}));

const InfoInsight = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <InfoInsightContainer>
      <GraphContainer>
        <div className={classes.demo1}>
          <AntTabs
            value={value}
            onChange={handleChange}
            aria-label="ant example"
          >
            <AntTab label="Overall" />
            <AntTab label="ADC" />
            <AntTab label="Top" />
          </AntTabs>
          <Typography className={classes.padding} />
        </div>
        <InsightGraph />
      </GraphContainer>
    </InfoInsightContainer>
  );
};

const InfoInsightContainer = styled.div`
  background: #f5f9fc;
  flex-direction: row;
  display: flex;
`;

const GraphContainer = styled.div`
  flex-grow: 1;
  margin: 0 150px;
`;

export default InfoInsight;
