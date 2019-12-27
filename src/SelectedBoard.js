import React from 'react';

import AddlistButton from './selectedBoard/addlistButton';
import AddlistContent from './selectedBoard/addlistContent';
import BoardHeader from './common/BoardHeader';
import BoardList from './selectedBoard/boardList';
import BoardTitle from './selectedBoard/boardTitle';

import "./App.css"

export default class Boards extends React.Component {  
  constructor(props){
    super(props)
    this.state = {
        focus : false,
        add : false
    }
    this.inputFocus = this.inputFocus.bind(this);
    this.addContent = this.addContent.bind(this);
    this.closeAddContent = this.closeAddContent .bind(this);
}

inputFocus(event){      
    this.setState({ focus : event.target.className})      
}

addContent(){
    this.state.add === true ? 
    this.setState({ add : false }) :
    this.setState({ add : true })           
}
closeAddContent(){
    this.setState({ add : false })
}
render(){ 
    let generatedLists = ["ToDo","Doing"]
    let boardList = ["내용1","내용2","내용3"]
    console.log(this.state)
    return (
        <div onClick = {this.inputFocus} style = {{width : "100%", height : "99vh"}}>
            <BoardHeader />        
            <div className = "boardTitle">
                <h3>보드명</h3>
            </div>
            <div style = {{display: "inline-flex"}}>                
                <div className = "addListWrapper" style = {styles.addListWrapper}>
                    <form>                                          
                        <BoardTitle />
                        <BoardList 
                            list = {boardList}
                            focus = {this.state.focus}
                        />                        
                        {
                            // open, close, submit 3단계로 나눠서 진행?
                            this.state.add ?
                            <AddlistContent addContent = {this.addContent} closeAddContent = {this.closeAddContent}/> :
                            <AddlistButton addContent = {this.addContent}/>             
                        }
                    </form>
                </div>
            </div>
        </div>
    );
  }
}


const styles = {

generatedListWrapper:{
    background: "white",
    border: "solid 1px lightgray",
    display : "table",
    height: "auto",
    width: "272px",
    padding: "6px 8px",
    borderRadius: "5px",
    marginLeft : "5px",
    marginRight : "5px",
    opacity: 0.9,
}
,
addListWrapper : {
    background: "#ebecf0",
    borderRadius: "5px",
    display : "table",
    padding: "6px 8px",
    height: "auto",
    width: "272px",
    opacity: 0.7,    
},
addListElements : {
    color:"black",
    display: "table-cell", 
    lineHeight: "0px",
    verticalAlign : "middle",
},
aTag: {
    textDecoration: "none",
},
}