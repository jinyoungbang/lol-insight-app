import React from "react";
import {
  createStyles,
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import BackgroundOverlay from "../BackgroundOverlay";
import HeaderSearch from "../Insights/components/HeaderSearch";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FCF7FF",
    },
    secondary: {
      light: "#FCF7FF",
      main: "#FCF7FF",
    },
  },
});

const useStyles = makeStyles(() => createStyles({
  padding: {
    textAlign: 'left',
    color: '#1D1A27',
    width: '50%',
    margin: 'auto',
    padding: '1em',
    minWidth: "976px"
  }
}))

export default function PrivacyPolicy() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <BackgroundOverlay color="#f5f9fc" />
      <HeaderSearch region="KR"/>
      <div className={classes.padding}>
        <h1>About Daiv</h1>

        <p>Page being built...</p>
        <p>Will be posting future plans and features that are currently in progress!</p>
      </div>
    </ThemeProvider>
  )
}