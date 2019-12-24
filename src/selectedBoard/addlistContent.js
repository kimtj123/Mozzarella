import React from 'react';
import Button from '@material-ui/core/Button';


export default function addlistContent(props){    

    console.log(props.addContent)
    return (
    <div className = "addCardWrapper">
        <div className = "addCardTextAreaWrapper" style = {styles.listCardDetailWrapper}>
            <textarea className = {`addCardTextArea`}
                style = {styles.listDetailsInput} 
                placeholder = "내용을 입력하세요."
                />                 
        </div>        
        <div className = "addCardButtonWrapper" >
            <Button onClick = {props.addContent} variant="contained" color="primary" href="#contained-buttons">
            카드 추가
            </Button>     
        </div>
    </div>
    )
}


const styles = {
listCardDetailWrapper : {    
    background : "white",
    borderRadius: "3px",
    boxShadow: "0 1px 0 rgba(9,30,66,.25)",    
    marginBottom: "10px",
    padding: "3px",
    width: "calc(100% - 13px)"
},
listDetailsInput: {
    background: "none",
    border: "none",
    boxShadow: "none",
    marginBottom: "4px",
    maxHeight: "162px",
    minHeight: "54px",
    overflow: "hidden",
    overflowWrap: "break-word",
    outline:"none",
    resize: "none",
    width: "100%",
    height: "54px",      
},
}