import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';


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


export default function BoardHeader(props) {
  const classes = useStyles();

  function logout(){
    let URL = "http://localhost:4000/users/logout"
    
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({}),
      headers: {
          'Content-Type': 'application/json',
      },
    })
    .then(res => {
      if(res.status === 204)    
      {
        alert("로그아웃되었습니다.")
        props.gotoMainPage();
      }
    })  
  }

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
          <Button onClick = {logout} edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
            로그아웃
          </Button>             
          <p>환영합니다. 김태중님</p>
        </Toolbar>
      </AppBar>
    </div>
  );
}