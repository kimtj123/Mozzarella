import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


export default function addlistContent(props){    

    // console.log("리스트추가창 닫기 :: ",props.closeAddContent)
    // console.log("상태가 내려오는가",props.state)
    // console.log("이름이 내려오는가",props.name)
    return (
    <div className = "addCardWrapper" 
        style = {
        props.state === props.name ?
        {} : styles.beforeClick}                 
    >   
        <div className = "addCardTextAreaWrapper" style = {styles.listCardDetailWrapper}>
            <textarea className = {`addCardTextArea`}
                style = {styles.listDetailsInput} 
                placeholder = "내용을 입력하세요."
                />                 
        </div>        
        <div className = "addCardButtonWrapper" style = {{display : "flex"}}>
            <Button variant="contained" color="primary" >
                리스트   추가
            </Button>     
            <IconButton 
            style = {styles.closeListElements}         
            onClick = {props.openAddList}
            >
                <CloseIcon style={{ fontSize: 36 }}/>
            </IconButton>   
        </div>
    </div>
    )
}


const styles = {
beforeClick: {
    display: "none",        
},
closeListElements : {
    color:"black",
    display: "table-cell", 
    lineHeight: "0px",
    padding : "0px 0px 0px 5px",    
    verticalAlign : "middle",
},    
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