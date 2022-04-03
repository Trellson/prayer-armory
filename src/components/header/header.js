import React from 'react';
import { Typography, AppBar, CssBaseline, Toolbar } from '@material-ui/core'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import useStyles from '../../styles/styles'
function Header() {
  
  const classes = useStyles();
    return (
      <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <HomeSharpIcon className={classes.icon}/>
          <Typography variant="h5">
          The Prayer Armory
          </Typography>
        </Toolbar>
      </AppBar>
      </>
    );
    }
  
  export default Header;