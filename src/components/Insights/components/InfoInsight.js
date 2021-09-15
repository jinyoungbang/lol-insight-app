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
  const [insightsToRender, setInsightsToRender] = React.useState(
    props.data.filter(function (obj) {
      return obj.toRender;
    })
  );

  React.useEffect(() => {
    setInsightsToRender(
      props.data.filter(function (obj) {
        return obj.toRender;
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <InfoInsightContainer>
      {insightsToRender && (
        <GraphContainer>
          <div className={classes.demo1}>
            <AntTabs
              value={value}
              onChange={handleChange}
              aria-label="ant example"
            >
              <AntTab label="Overall" />
              <AntTab label="Coming Soon..." disabled={true} />
              {/* <AntTab label="JG" disabled={true}/>
            <AntTab label="Mid" disabled={true}/>
            <AntTab label="ADC" disabled={true}/>
            <AntTab label="Sup" disabled={true}/> */}
            </AntTabs>
            <Typography className={classes.padding} />
          </div>
          {props.data.filter(d => d.toRender).map((data, i) => (
          <InsightGraph key={i} data={data} />
        ))}
        </GraphContainer>
      )}
    </InfoInsightContainer>
  );
};

const InfoInsightContainer = styled.div`
  background: #f5f9fc;
  width: "90%";
`;

const GraphContainer = styled.div`
  flex-grow: 1;
  marginright: 50px;
`;

export default InfoInsight;
