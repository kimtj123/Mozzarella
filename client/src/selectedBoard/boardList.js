import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';

export default class BoardList extends React.Component{    

    constructor(props)
    {
        super(props)
        console.log(props)
    }
    render(){
    let boardList = this.props.boardList

    return (
        <div>
            <div style = {{display : "inline-flex"}}>
                <input className = "list-name-input" 
                    style = {styles.listNameInput} 
                    placeholder = "제목"                                                               
                    defaultValue = {this.props.title}
                    onBlur = {this.props.changeCotent}
                >
                </input>
                <div className = "list-add-control" 
                    onClick = {this.props.removeCard} 
                    title = {this.props.title}
                >
                    <DeleteIcon />
                </div>         
            </div>    
            {
                boardList.map((content,index) => 
                (
                    <div className = "listCardDetailWrapper" 
                    style = {styles.listCardDetailWrapper} 
                    key = {index}
                    title = {this.props.title}
                    
                    >
                        <input className = "listDetailsInput"
                            style = {styles.listDetailsInput} 
                            placeholder = "내용"
                            onChange = {this.props.listContent}
                            onBlur = {this.props.changeCotent}
                            defaultValue = {content}                            
                        />                            
                        <IconButton style = {{padding : "0px"}} 
                            onClick = {this.props.deleteList}
                        >
                            <CloseIcon style = {styles}/>
                        </IconButton>                                     
                    </div>
                ))
            }
        </div>
        )    
    }
}


const styles = {
iconStyle : {
    fontSize: "18px", 
    paddingRight: "5px" 
},
titleInput : {
    background: "none",
    border: "none",
    fontWeight: "bold",
    color: "#6b778c",
},
listNameInput: {
    background: "none",
    border: "none",
    borderRadius: "3px",
    boxShadow: "none",
    padding: "4px 72px 4px 8px",
    fontWeight: 600,    
    lineJeight: "20px",
    width: "calc(100% - 16px)",
    marginBottom: "5px"

},
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
    borderRadius: "3px",
    padding: "4px 72px 4px 8px",
    fontWeight: 600,
    width: "calc(100% - 16px)",
    height: "20px",
    outline:"none" 
},
}