import React from 'react';
import Button from '@material-ui/core/Button';


const inputTitle = ["이메일","유저아이디","비밀번호","비밀번호 확인"]

export default class SignUp extends React.Component {  

    constructor(props)
    {
        super(props)
        this.state = {
            email: '',
            id: '',
            password: '',
            pwdchk: '',
        }
        this.submit = this.submit.bind(this);
    }
    submit()
    {
        this.setState({
            email : document.getElementsByClassName("이메일")[0].value,
            id : document.getElementsByClassName("유저아이디")[0].value,
            password : document.getElementsByClassName("비밀번호")[0].value,
            pwdchk : document.getElementsByClassName("비밀번호 확인")[0].value
        })    
    }
    render()
    {    
        console.log(this.state)
        return (
        <div style = {styles.wrapper}>
            <div>
                <img style = {styles.image} src = {require('./common/Mozzarello.png')}/>          
            </div>
            <div style = {styles.backGround}>
                <div style = {styles.titleWrapper}>
                    <p style = {styles.titleText}>회원가입</p>
                </div>
                {
                    inputTitle.map((val) => {                
                    return (
                        <div>
                            <input className = {val} style = {styles.input} placeholder = {val}>
                            </input>                          
                        </div>
                        )
                    }
                )}                            
                <Button onClick = {this.submit} variant="contained" color="primary" style = {styles.button}>
                    회원가입
                </Button>                      
            </div>       
        </div>    
            )
    }
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
}