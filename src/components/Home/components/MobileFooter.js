import { React } from "react";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    main: {
      color: "#fcf7ff",
    },
    footer: {
      display: "flex",
      margin: "0 auto",
      width: "90%",
      // justifyContent: 'space-between'
    },
    footerText: {
      fontFamily: '"Inter",sans-serif',
      color: "#fcf7ff",
    },
    desc: {
      padding: "1em",
    },
    notice: {
      margin: "0 auto",
      width: "90%",
      textAlign: "left",
      fontSize: "7px",
      fontWeight: "400",
      marginTop: "10px",
      marginBottom: "30px"
    },
  })
);

function MobileFooter() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.footer}>
        <div classesName={classes.footerText}>
          <FooterLink
            classesName={classes.footerTextLink}
            onClick={() => (window.location.href = "/about")}
            color="inherit"
          >
            About Daiv
          </FooterLink>
        </div>
        <div classesName={classes.footerText}>
          <FooterLink
            onClick={() => (window.location.href = "/privacy")}
            color="inherit"
          >
            Privacy Policy
          </FooterLink>
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
    marginRight: "18px",
    fontSize: "11px",
    fontWeight: "400",
  },
})(Link);

export default MobileFooter;
