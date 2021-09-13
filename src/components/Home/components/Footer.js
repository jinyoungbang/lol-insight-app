import React from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Link, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => 
  createStyles({
    main: {
      color: 'white',
    },
    footer: {
      display: 'flex',
      marginLeft: '5em',
      marginRight: '5em',
      justifyContent: 'space-between'
    }
  })
);

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.footer}>
        <Typography variant="h6">
          <Link href='#' color="inherit">
            About Daiv
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link href='#' color="inherit">
            Privacy Policy
          </Link>
        </Typography>
      </div>
      <Typography variant="subtitle1">Copyright notice text here</Typography>
    </div>
  );
};

export default Footer;