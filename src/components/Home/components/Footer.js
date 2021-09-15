import { React, useState } from "react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography, Link, Dialog, Button} from '@material-ui/core'

const useStyles = makeStyles((theme) => 
  createStyles({
    main: {
      color: 'white',
    },
    footer: {
      display: 'flex',
      marginLeft: '10em',
      marginRight: '10em',
      justifyContent: 'space-between'
    },
    desc: {
      padding: '1em'
    },
    notice: {
      margin: 'auto',
      width: '50%'
    }
  })
);

function Footer() {
  const classes = useStyles();
  const [openDesc, setOpenDesc] = useState(false);
  const [openPriv, setOpenPriv] = useState(false);

  const handleClickDescOpen = () => {
    setOpenDesc(true);
  };

  const handleDescClose = (value) => {
    setOpenDesc(false);
  };

  const handleClickPrivOpen = () => {
    setOpenPriv(true);
  };

  const handlePrivClose = (value) => {
    setOpenPriv(false);
  };

  return (
    <div className={classes.main}>
      <div className={classes.footer}>
        <Typography variant="h6">
          <Link onClick={handleClickDescOpen} color="inherit">
            About Daiv
            <Dialog open={openDesc} onClose={handleDescClose}>
              <div className={classes.desc}>
                <Typography variant="h6">About Daiv</Typography>
                Daiv aims to provide statistical insights to summoners who are wishing to improve on their gameplay. We aim to take advantage of League of Legends' API to use match data to provide useful insights in an aesthetic and easy-to-understand way so the summoners can see if they are improving in a specific metric or not. As the app progresses, we hope to provide more useful insights, such as using machine learning to detect which stats have an impact on a summoner winning a game or not.
              </div>
            </Dialog>
          </Link>
        </Typography>
        <Typography variant="h6">
          <Link onClick={handleClickPrivOpen} color="inherit">
            Privacy Policy
          </Link>
        </Typography>
      </div>
      <Typography className={classes.notice} variant="subtitle1">DAIV.APP isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.</Typography>
    </div>
  );
};

export default Footer;