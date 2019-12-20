import React from 'react';
import Button from '@material-ui/core/Button';



export default function Login(props) {  
  return (
    <div style = {styles.wrapper}>
        <div>
            <img style = {styles.image} src = {require('./common/Mozzarello.png')}/>          
        </div>
        <div style = {styles.backGround}>
            <div style = {styles.titleWrapper}>
                <p style = {styles.titleText}> 로그인</p>
            </div>
            <div>
                <input style = {styles.input} placeholder = '이메일을 입력하세요'>
                </input>          
            </div>
            <div>
                <input style = {styles.input} placeholder = '비밀번호를 입력하세요'>
                </input>          
            </div>
            <Button variant="contained" color="primary" style = {styles.button}>
                로그인
            </Button>          
            <div>or</div>
            <Button variant="contained" color="primary" style = {styles.googleButton}>
                구글 로그인
            </Button>
            <Button variant="contained" color="primary" style = {styles.facebookButton}>
                페이스북 로그인
            </Button>
            <hr style = {styles.hr}></hr>
            <div style = {{display: 'inline-flex'}}>
                <p style = {styles.findText}>아이디 찾기 </p>
                <p style = {styles.findText}>&nbsp;/&nbsp;</p>
                <p style = {styles.findText}>비밀번호 찾기</p>
            </div>
        </div>       
    </div>
  );
}


const styles = {
    backGround : 
    {
        backgroundColor: 'white',
        boxShadow: 'rgba(0,0,0,0.1) 0 0 10px',
        width: '400px',
        height: '450px',
        position: 'absolute',
        top: '40%',
        marginTop: '-230px',
        left: '50%',
        marginLeft: '-200px'
    },
    button : {
        marginTop: "20px",
        width: "260px",
        backgroundColor: "#01A9DB"
    },
    googleButton : {
        marginTop: "10px",
        width: "260px",
        backgroundColor: "#FA5858"
    },
    facebookButton : {
        marginTop: "10px",
        width: "260px",
    },
    titleWrapper : {
        marginTop : "20px",
        marginBottom : "20px",
    },
    titleText : {
        fontSize: "25px"
    },
    wrapper :
    {
        marginTop: "25vh",
        textAlign: 'center'        
    },  
    input :
    {
        color: "rgba(0,0,0,0.25)",
        width: "250px",
        height: "33px",        
        marginTop : "10px",
        padding:"4px",
        borderRadius: "5px",
        border: "solid 1px",
        fontSize: "15px"
    },
    image : 
    {
        position: 'absolute',
        top: '0%',
        marginTop: '50px',
        left: '50%',
        marginLeft: '-95.5px',
    },
    hr :
    {
        marginTop : '20px',
        width : '260px'
    },
    findText : {
        margin : 0,
    }
}