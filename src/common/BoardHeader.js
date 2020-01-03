import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width : '98.5vw'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function BoardHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title} >
            Mozzarello
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <AddIcon />
          </IconButton>          
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ErrorOutlineIcon />
          </IconButton>
          <p>환영합니다. 김태중님</p>
        </Toolbar>
      </AppBar>
    </div>
  );
}
