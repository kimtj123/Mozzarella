import React from 'react';

import AddlistArea from './selectedBoard/addlistArea';
import AddlistContent from './selectedBoard/addlistContent';
import BoardHeader from './common/BoardHeader';
import BoardList from './selectedBoard/boardList';

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import "./App.css"

export default class Boards extends React.Component {  
  constructor(props){
    super(props)
    this.state = {
        cardList : 
        [
            {
                "title" : "ToDo",
                "boardList" : ["내용1","내용2","내용3"]
            },
            {   
                "title" : "Doing",
                "boardList" : ["내용2-1","내용2-2","내용2-3"]
            },   
            {   
                "title" : "Done",
                "boardList" : ["내용3-1","내용3-2","내용3-3"]
            },      
        ],
        add : ""
    }
    this.openAddList = this.openAddList.bind(this);
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
}

openAddList(event){
    let nameVal = event.target.getAttribute('name')    
    this.setState({ add : nameVal })               
    console.log("콘텐츠 추가 :: ", this.state.add)
}

addCard(){
    let currentList = Object.assign([], this.state.cardList);
    currentList.push(
        {   
            "title" : "",
            "boardList" : []
        }
    )
    this.setState({cardList : currentList}) 
}
removeCard(e){        

    console.log("e.currentTarget :: ", e.currentTarget.title)
    console.log("e.detail :: ", e.detail)
    console.log("e.target :: ", e.target)
    
    const products = this.state.cardList.filter(prod => prod.title !== e.currentTarget.title)
    this.setState({cardList : products})
}
render(){     
    console.log(this.state.cardList)
    return (
        <div  style = {{width : "100%", height : "99vh"}}>
            <BoardHeader />        
            <div className = "boardTitle">
                <h3>보드명</h3>
            </div>
            <div style = {{display: "inline-flex"}}>         
            {
                this.state.cardList.map((val,index)=> 
                <div className = "addListWrapper" style = {styles.addListWrapper} key = {val.title} title = {val.title}>
                    <form>                                          
                        <BoardList 
                            focus = {this.state.focus}
                            title = {val.title}
                            boardList = {val.boardList}
                            removeCard = {this.removeCard}
                        /> 
                        <AddlistArea
                        openAddList = {this.openAddList} 
                        name = {val.title}
                        state = {this.state.add} 
                        />                                                                                                                    
                        <AddlistContent 
                        openAddList = {this.openAddList} 
                        closeAddList = {this.closeAddList} 
                        name = {val.title}
                        state = {this.state.add}
                        addList = {this.addList}
                        />                         
                    </form>
                </div>         
                )
            }                 
            <div className = "addListWrapper" 
            style = {styles.addListWrapper}
            onClick = {this.addCard}
            >
                <span className = "addListElements" style = {styles.createListIcon}>
                    <AddIcon />
                </span>
                <span style = {styles.createListText}>
                    카드 추가
                </span>     
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
    marginRight : "20px",
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
createListIcon : {
    color:"black",
    display: "table-cell",     
    lineHeight: "0px",
    verticalAlign : "middle",
    width : "25px"
},    
createListText : {
    color:"black",
    display: "table-cell",     
    lineHeight: "0px",
    verticalAlign : "middle",
},    
}