import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';

export default function BoardList(props){    

    let list = props.list

    return list.map((content,index) => 
    (
        <div className = "listCardDetailWrapper" style = {styles.listCardDetailWrapper}>
            <input className = {`listDetailsInput${index}`}
                style = {
                    props.focus ===  "listDetailsInput" ? 
                    styles.listDetailsInputFocus :
                    styles.listDetailsInput
                } 
                placeholder = {content}
                />                            
                <IconButton style = {{padding : "0px"}}>
                    <CreateIcon style = {{ fontSize: "18px" }}/>
                </IconButton>                                     
        </div>
    ))    
}


const styles = {
listCardDetailWrapper : {    
    background : "white",
    borderRadius: "3px",
    boxShadow: "0 1px 0 rgba(9,30,66,.25)",    
    display : "inline-flex",
    marginBottom: "10px",
    paddingRight: "3px"
},
listDetailsInput: {
    background: "white",
    border: "none",
    boxShadow: "none",
    padding: "4px 72px 4px 8px",
    fontWeight: 600,
    width: "calc(100% - 16px)",
    height: "20px",
    outline:"none",    
},
listDetailsInputFocus: {
    background: "white",
    border: "none",
    boxShadow: "none",
    padding: "4px 72px 4px 8px",
    fontWeight: 600,
    borderRadius: "3px",
    width: "calc(100% - 16px)",
    height: "20px",
    outline:"none"
},
}