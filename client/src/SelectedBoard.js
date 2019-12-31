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
        add : "",
        listContent : ""
    }

    this.addCard = this.addCard.bind(this);
    this.addList = this.addList.bind(this);
    this.changeCotent = this.changeCotent.bind(this);
    this.listContent = this.listContent.bind(this);
    this.openAddList = this.openAddList.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.deleteList = this.deleteList .bind(this);
}

openAddList(event){
    let nameVal = event.target.getAttribute('name')    
    this.setState({ add : nameVal })               
    console.log("콘텐츠 추가 :: ", this.state.add)
}

addCard(e){
    
    let currentList = Object.assign([], this.state.cardList);
    currentList.push(
        {   
            "title" : "",
            "boardList" : []
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
                val.boardList.push(this.state.listContent)
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
        else if(val.boardList.includes(e.target.defaultValue)) // 카드 리스트 내용 수정
        {                        
            let indexWillChange = val.boardList.indexOf(e.target.defaultValue);
            val.boardList[indexWillChange] = e.target.value;
            this.setState({
                listContent : ""
            })
            console.log(this.state.listContent)
        }
    });
    this.setState({cardList: newCardList})
}
deleteList(e){
    // let newCardList = Object.assign([], this.state.cardList);
    let newCardList = JSON.parse(JSON.stringify(this.state.cardList))
    let parentIndex = e.currentTarget.parentNode;
    console.log(parentIndex)
    // newCardList.map((val,index)=>{
    //     if(val.boardList.indexOf(parentIndex) !== -1)
    //     {
    //         val.boardList.splice(val.boardList.indexOf(parentIndex),1)
    //     }
    // })
    console.log(newCardList)
    this.setState({cardList: newCardList})
 
}
listContent(e){        
    let content = e.target.value      
    this.setState({listContent : content});
}
removeCard(e){        
    const newCard = this.state.cardList.filter(card => card.title !== e.currentTarget.title)
    this.setState({cardList : newCard})
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
                <div className = "addListWrapper" 
                    style = {styles.addListWrapper} 
                    key = {val.title} 
                    title = {val.title}
                >
                    <form>                                          
                        <BoardList 
                            addList = {this.addList}
                            boardList = {val.boardList}
                            changeCotent = {this.changeCotent}
                            deleteList = {this.deleteList}
                            focus = {this.state.focus}
                            listContent = {this.listContent}
                            removeCard = {this.removeCard}                            
                            title = {val.title}                            
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