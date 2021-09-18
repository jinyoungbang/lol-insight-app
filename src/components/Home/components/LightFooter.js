import { React } from "react";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    main: {
      color: "#1D1A27",
      position: "relative",
      bottom: 0,
      marginBottom: "20px",
      //   height: "calc(100% - 20px)"
    },
    footer: {
      display: "flex",
      margin: "0 auto",
      width: "90%",
      // justifyContent: 'space-between'
    },
    footerText: {
      fontFamily: '"Inter", sans-serif',
      color: "#fcf7ff",
    },
    desc: {
      padding: "1em",
    },
    notice: {
      margin: "0 auto",
      width: "90%",
      textAlign: "left",
      fontSize: "11px",
      fontWeight: "400",
      marginTop: "10px",
      marginBottom: "30px",
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    },
  })
);

function LightFooter() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.footer}>
        <div classesName={classes.footerText}>
          <a href="/about" className={classes.link}>
            <FooterLink color="inherit">
              About Daiv
            </FooterLink>
          </a>
        </div>
        <div classesName={classes.footerText}>
          <a href="/privacy" className={classes.link}>
            <FooterLink color="inherit">Privacy Policy</FooterLink>
          </a>
        </div>
        <div classesName={classes.footerText}>
          <a href="mailto:jybang1999@gmail.com" className={classes.link}>
            <FooterLink color="inherit">Feedback</FooterLink>
          </a>
        </div>
      </div>
      <Typography className={classes.notice} variant="subtitle1">
        Daiv isn’t endorsed by Riot Games and doesn’t reflect the views or
        opinions of Riot Games or anyone officially involved in producing or
        managing League of Legends. League of Legends and Riot Games are
        trademarks or registered trademarks of Riot Games, Inc. League of
        Legends © Riot Games, Inc.
      </Typography>
    </div>
  );
}

const FooterLink = withStyles({
  root: {
    marginRight: "20px",
    fontSize: "15px",
    fontWeight: "400",
  },
})(Link);

export default LightFooter;
