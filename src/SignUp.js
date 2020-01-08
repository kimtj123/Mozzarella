import React from 'react';
import Button from '@material-ui/core/Button';


const inputTitle = [["이메일","email"],["이름","username"],["비밀번호","password"],["비밀번호 확인", "pwdchk"]]
export default class SignUp extends React.Component {  

    constructor(props)
    {
        super(props)
        this.state = {            
            email: '',
            username: '',
            password: '',            
        }
        this.submit = this.submit.bind(this);
        this.email = this.email.bind(this);
        this.username = this.username.bind(this);
        this.password = this.password.bind(this);
        this.pwdchk = this.pwdchk.bind(this);
    }
    email(e){
        let value = e.target.value
        this.setState ({
            email : value
        })
    }
    username(e){
        let value = e.target.value
        this.setState ({
            username : value
        })
    }
    password(e){
        this.setState({
            password : e.target.value
        })
    }
    pwdchk(e){
        this.setState({
            pwdchk : e.target.value
        })
    }
    submit()
    {
        let URL = "http://localhost:4000/users/singup"        
        let loginInfo = Object.assign({}, this.state)        

        if(loginInfo.password === loginInfo.pwdchk)
        {
            delete loginInfo.pwdchk
            if(!loginInfo.pwdchk)
            {
                fetch(URL, {
                    method: 'POST',
                    body: JSON.stringify(loginInfo),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(res => {
                    console.log(res.body);
                    return res.json();
                })
                .then(res => console.log(res))           
            }
        }
        else
        {
            alert("비밀번호가 일치하지 않습니다.")
        }
        
    }
    render()
    {    
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
                    if(val[1] === "password" || val[1] === "pwdchk"){
                        return (
                            <div>
                                <input type = "password" onChange = {this[val[1]]} className = {val[1]} style = {styles.input} placeholder = {val[0]}>
                                </input>                          
                            </div>
                            )
                        }
                    else{
                        return (
                            <div>
                                <input onChange = {this[val[1]]} className = {val[1]} style = {styles.input} placeholder = {val[0]}>
                                </input>                          
                            </div>
                            )
                    }
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