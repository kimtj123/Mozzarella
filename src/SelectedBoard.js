import React from 'react';

import AddlistArea from './selectedBoard/addlistArea';
import AddlistContent from './selectedBoard/addlistContent';
import BoardHeader from './common/BoardHeader';
import BoardList from './selectedBoard/boardList';

import AddIcon from '@material-ui/icons/Add';

import "./App.css"

export default class Boards extends React.Component {  
  constructor(props){
    super(props)
    this.state = {
        cardList : 
        [
            {
                "_id" : "23TplPdS",
                "title" : "ToDo",
                "list" : ["내용1","내용2","내용3"]
            },
            {   
                "_id" : "46Juzcyx",
                "title" : "Doing",
                "list" : ["내용2-1","내용2-2","내용2-3"]
            },   
            {   
                "_id" : "2WEKaVNO",
                "title" : "Done",
                "list" : ["내용3-1","내용3-2","내용3-3"]
            },      
        ],
        add : "",
        listContent : "",
        clickedList : ""
    }

    this.addCard = this.addCard.bind(this);
    this.addList = this.addList.bind(this);
    this.changeCotent = this.changeCotent.bind(this);
    this.listContent = this.listContent.bind(this);
    this.openAddList = this.openAddList.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.getListName = this.getListName.bind(this);
}

getListName(e){
console.log(e.target.title)
this.setState( {clickedList : e.target.title})
    
}
openAddList(e){
    let nameVal = e.target.getAttribute('name')    
    this.setState({ add : nameVal })               
    console.log("콘텐츠 추가 :: ", this.state.add)
}

addCard(e){
    
    let currentList = Object.assign([], this.state.cardList);
    currentList.push(
        {   
            "title" : "",
            "list" : []
        }
    )
    this.setState({
        cardList : currentList,
        listContent : ""
    }) 
}
addList(e){
    if(this.state.listContent !== "")
    {   
        let newCardList = Object.assign([], this.state.cardList);
        
        newCardList.forEach((val,index) => {
            if(e.currentTarget.title === val.title)
            {
                val.list.push(this.state.listContent)
            }
        })
        this.setState({
            cardList : newCardList,
            listContent : ""
        })
        console.log(this.state)
        
    } 
}
changeCotent(e){
    let newCardList = Object.assign([], this.state.cardList);
    newCardList.forEach((val, index) => {
        if(val.title === e.target.defaultValue) // 카드 제목 수정
        {
            val.title = e.target.value;
        }
        else if(val.list.includes(e.target.defaultValue)) // 카드 리스트 내용 수정
        {                        
            let indexWillChange = val.list.indexOf(e.target.defaultValue);
            val.list[indexWillChange] = e.target.value;  
        }
    });
    this.setState({
        cardList: newCardList,        
    })
}
deleteList(e){
    let newCardList = Object.assign([], this.state.cardList);
    let listName = e.currentTarget.parentNode.children[0].innerText
    console.log(e.currentTarget.parentNode.children[0])

    for(let i = 0; i < newCardList.length; i++)
    {        
        for(let j = 0; j < newCardList[i]["list"].length; j++)
        {            
            if(newCardList[i]["list"][j] === listName)
            {
                newCardList[i]["list"].splice(j,1);
            }
        }
    }
    this.setState({cardList : newCardList})
    
}
listContent(e){        
    let content = e.target.value      
    this.setState({listContent : content});
}
removeCard(e){        
    console.log("REMOVE!!")
    const newCard = this.state.cardList.filter(card => card.title !== e.currentTarget.title)
    this.setState({cardList : newCard})
}
render(){     
    console.log(this.state.clickedList)
    return (
        <div  style = {{width : "100%", height : "99vh"}}>
            <BoardHeader />        
            <div className = "boardTitle">
                <h3>보드명</h3>
            </div>
            <div style = {{display: "inline-flex"}}>         
            {
                this.state.cardList.map((val,index)=> 
                <div className = "addListWrapper" 
                    style = {styles.addListWrapper} 
                    key = {val.title+index} 
                    title = {val.title}
                >
                    <form>                                          
                        <BoardList 
                            id = {val.id}
                            list = {val.list}
                            title = {val.title}           
                            
                            clickedList = {this.state.clickedList}
                            
                            addList = {this.addList}
                            changeCotent = {this.changeCotent}
                            deleteList = {this.deleteList}
                            focus = {this.state.focus}
                            listContent = {this.listContent}
                            removeCard = {this.removeCard}    
                            getListName = {this.getListName}                                                           
                        /> 
                        <AddlistArea
                            openAddList = {this.openAddList} 
                            state = {this.state.add} 
                            title = {val.title}
                        />                                                                                                                    
                        <AddlistContent 
                            addList = {this.addList}
                            listContent = {this.listContent}
                            openAddList = {this.openAddList} 
                            state = {this.state.add}
                            title = {val.title}
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