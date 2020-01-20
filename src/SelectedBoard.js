import React from 'react';

import AddlistArea from './selectedBoard/addlistArea';
import AddlistContent from './selectedBoard/addlistContent';
import BoardHeader from './common/BoardHeader';
import CardList from './selectedBoard/cardList';

import AddIcon from '@material-ui/icons/Add';

import "./App.css"

export default class Boards extends React.Component {  
  constructor(props){
    super(props)
    this.state = {
        boardID : localStorage.getItem("boardID"),
        cardList : [],
        add : "",
        listContent : "",
        clickedList : null
    }
    console.log(localStorage.getItem("boardID") === this.state.boardID)

    this.addCard = this.addCard.bind(this);
    this.addList = this.addList.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeContent = this.changeContent.bind(this);
    this.listContent = this.listContent.bind(this);
    this.loadCard = this.loadCard.bind(this);
    this.openAddList = this.openAddList.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.getListName = this.getListName.bind(this);
}

loadCard(){
    let URL = "http://localhost:4000/users/boards/cards/" + this.state.boardID

    fetch(URL)
    .then(res => res.json())
    .then(res => {
        console.log("카드 받기 :: ",res);
        console.log("카드 받기 :: ",res.cards);
        this.setState({cardList : res.cards});
    })
}

getListName(e){
    console.log("getListName :: ",this.state.clickedList)
if(this.state.clickedList === null)
{
    this.setState( { clickedList : e.currentTarget.id })        
}
else
{
    this.setState( { clickedList : null })        
}
}

openAddList(e){
    let nameVal = e.target.getAttribute('name')    
    this.setState({ add : nameVal })               
    console.log("콘텐츠 추가 :: ", this.state.add)
}

addCard(e){
    let URL = "http://localhost:4000/users/boards/cards"
    let card = {
        "boardID" : this.state.boardID,
        "title" : " ", // 그냥 빈 스트링은 전송이 안된다..
        "list" : []
    }
    
    let options = {
        method: 'POST',
        body: JSON.stringify(card),
        headers: {
        'Content-Type': 'application/json',          
        },
        credentials: 'include'
    }
    fetch(URL, options)
    .then(res => res.json)
    .then(res => {
        this.loadCard()
        console.log(res)
        }
    )
}

deleteCard(e){        
    let deleteCard = e.currentTarget.parentNode.parentNode.parentNode.parentNode.id
    let URL = `http://localhost:4000/users/boards/deletecard/${deleteCard}`

    // const newCard = this.state.cardList.filter(card => {
    //     console.log("card_id :: ", card._id)
    //     console.log("deleteCard :: ", deleteCard)
    //     return card._id !== deleteCard
    //     }
    //     )
    // this.setState({cardList : newCard})
    fetch(URL, { 
        method: 'delete',
       })
      .then(res => res.text()) // json 형식이 아닌 text 형식으로 해야 json 오류가 나지 않는다.
      .then(res => this.loadCard());
}

addList(e){
    let cardOfAddList = e.currentTarget.parentNode.parentNode.parentNode.parentNode.id
    let newList = this.state.listContent.slice()
    console.log(this.state.add)
    console.log(cardOfAddList)
    console.log(newList)
    let URL = "http://localhost:4000/users/boards/cards/list/" + cardOfAddList
    let body = {
        "content" : newList
    }
    fetch(URL, { 
        method : "PATCH" ,
        headers: {
            'Content-Type': 'application/json',          
        },
        body : JSON.stringify(body)  
    })
    .then(res => res.json())
    .then(res => this.loadCard()) 

    // if(this.state.listContent !== "")
    // {   
    //     let newCardList = Object.assign([], this.state.cardList);
        
    //     newCardList.forEach((val,index) => {
    //         if(e.currentTarget.title === val.title)
    //         {
    //             val.list.push(this.state.listContent)
    //         }
    //     })
    //     this.setState({
    //         cardList : newCardList,
    //         listContent : ""
    //     })
    //     console.log(this.state)        
    // } 
}

changeTitle(e){
    let changeTitleOfCard = e.currentTarget.parentNode.parentNode.parentNode.parentNode.id
    let newTitle = e.currentTarget.value
    let URL = "http://localhost:4000/users/boards/cards/title/" + changeTitleOfCard
    let body = {
        "title" : newTitle
    }
    fetch(URL, { 
        method : "PATCH" ,
        headers: {
            'Content-Type': 'application/json',          
        },
        body : JSON.stringify(body)  
    })
    .then(res => res.json())
    .then(res => console.log(res)) 
    // 굳이 fetch를 안해도  input value라 바뀌어있으므로 서버에 요청할 필요 없지 않을까..
}

changeContent(e){    
    console.log("changeContent ::", e.target)
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

async componentDidMount(){
    await this.loadCard();
}

render(){     
    console.log("보드아이디", this.state.boardID)
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
                    id = {val._id}
                >
                    <form>                                          
                        <CardList 
                            id = {val._id}
                            list = {val.list}
                            title = {val.title}           
                            
                            clickedList = {this.state.clickedList}
                            
                            addList = {this.addList}
                            changeContent = {this.changeContent}
                            changeTitle = {this.changeTitle}
                            deleteList = {this.deleteList}
                            focus = {this.state.focus}
                            listContent = {this.listContent}
                            deleteCard = {this.deleteCard}    
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