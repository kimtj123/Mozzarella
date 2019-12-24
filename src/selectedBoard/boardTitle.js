import React from 'react';


export default class BoardTitle extends React.Component {  
  constructor(props){
    super(props)
    this.state = {
        focus : false
    }
}

render(){ 
    return (
        <div style = {{display : "inline-flex"}}>
            <input className = "list-name-input" 
                style = {
                    this.state.focus ===  "list-name-input" ? 
                    styles.listNameInputFocus :
                    styles.listNameInput
                } 
                placeholder = "제목"                                                               
                />
            <div className = "list-add-control">
                <input className = "list-add-input"type = "button" value = "···" style = {styles.titleInput}/>
            </div>         
        </div>     
    );
  }
}


const styles = {
    listNameInput: {
        background: "none",
        border: "none",
        boxShadow: "none",
        padding: "4px 72px 4px 8px",
        fontWeight: 600,
        borderRadius: "3px",
        width: "calc(100% - 16px)",
        marginBottom: "5px"
    
    },
    listNameInputFocus: {
        background: "white",
        border: "none",
        borderRadius: "3px",
        boxShadow: "none",
        padding: "4px 72px 4px 8px",
        fontWeight: 600,    
        lineJeight: "20px",
        width: "calc(100% - 16px)",
        marginBottom: "5px"
    },
    titleInput : {
        background: "none",
        border: "none",
        fontWeight: "bold",
        color: "#6b778c",
    }
}