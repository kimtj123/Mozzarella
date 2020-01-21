import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default class addlistContent extends React.Component{   
    constructor(props){
        super(props)
        this.state = {
            textarea : ''
        }
        this.cleanTextArea = this.cleanTextArea.bind(this);
    }
    cleanTextArea(e){
        e.target.value = ""
    }
    render(){
        console.log("텍스트 :: ", this.state.textarea)
    return (
        <div className = "addCardWrapper" 
            style = {
            this.props.state === this.props.title ?
            {} : styles.beforeClick}                 
        >   
            <div className = "addCardTextAreaWrapper" style = {styles.listCardDetailWrapper}>
                <textarea className = {`addCardTextArea`}
                    style = {styles.listDetailsInput} 
                    placeholder = "내용을 입력하세요."
                    onBlur = {async (e) => {
                        await this.cleanTextArea(e)
                        await this.props.closeAddList()
                    }}
                    onChange = {this.props.listContent}                    
                    />                 
            </div>        
            <div className = "addCardButtonWrapper" style = {{display : "flex"}}>
                <Button variant="contained" color="primary" 
                onClick = {async (e) => {
                    await this.props.addList(e)
                    // await this.changeText(e)
                }} 
                title = {this.props.title}>
                    리스트   추가
                </Button>     
                <IconButton 
                style = {styles.closeListElements}         
                onClick = {this.props.openAddList}
                >
                    <CloseIcon style={{ fontSize: 36 }}/>
                </IconButton>   
            </div>
        </div>
        )
    }
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