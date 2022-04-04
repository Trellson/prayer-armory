import React from 'react';
import { Typography, AppBar, CssBaseline, Toolbar, IconButton } from '@material-ui/core'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import SortIcon from '@mui/icons-material/Sort';
import useStyles from '../../styles/styles'
function Header() {
  
  const classes = useStyles();
    return (
      <>
      <CssBaseline />
      <AppBar className={classes.appBar} elevation={0} position="relative">
        <Toolbar className={classes.appBarWrapper}>
          <h1 className={classes.title}> <span className={classes.colorText}>Prayer</span> Armory </h1>
          <Toolbar>
          <IconButton>
            <SortIcon className={classes.icon}/>
          </IconButton>
        </Toolbar>
        </Toolbar>
      </AppBar>
      </>
    );
    }
  
  export default Header;