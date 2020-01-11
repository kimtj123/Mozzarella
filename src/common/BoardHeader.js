import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';



  

export default class BoardHeader extends React.Component {

  constructor(props){
    super(props)
    this.state = {}
    
    this.logout = this.logout.bind(this);
  }

  logout(){
    let URL = "http://localhost:4000/users/logout"
    
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({}),
      headers: {
          "Access-Control-Allow-Origin": URL,
          'Content-Type': 'application/json',
      },
    })
    .then(res => {
      if(res.status === 204)    
      {        
        alert("로그아웃되었습니다.")        
        this.props.gotoMainPage();
      }
    })  
  }
  
render(){  
  return (    
    <div style={useStyles.root}>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <IconButton edge="start" style = {useStyles.menuButton} color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
          <Typography variant="h5" style = {useStyles.title} >
            Mozzarello
          </Typography>
          <Button onClick = {this.logout} style = {useStyles.menuButton} edge="start" color="inherit" aria-label="menu">
            로그아웃
          </Button>             
          <p>환영합니다. 김태중님</p>
        </Toolbar>
      </AppBar>
    </div>
  );
  }
}

const useStyles = 
{
  root: {
    flexGrow: 1,
    width : '98.5vw'
  },
  menuButton: {
    marginRight: "",
  },
  title: {
    flexGrow: 1,
  },
}
