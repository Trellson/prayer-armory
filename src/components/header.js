import React from 'react';
import { AppBar, CssBaseline, Toolbar, IconButton } from '@material-ui/core'
import SortIcon from '@mui/icons-material/Sort';
import useStyles from '../styles/styles'
import {Link} from 'react-router-dom'
function Header() {
  
  const classes = useStyles();
    return (
      <>
      <CssBaseline />
      <AppBar className={classes.appBar} elevation={0} position="relative">
        <Toolbar className={classes.appBarWrapper}>
          <Link style={{ textDecoration: 'none', color: '#FFF' }} to="/">
          <h1 className={classes.title}> Prayer <span className={classes.colorText}>Armory</span> </h1></Link>
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