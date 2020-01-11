import React from 'react';

import AddBoard from './boards/addBoard';
import BoardHeader from './common/BoardHeader';
import { BrowserRouter as Router, Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';



import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';


export default class Boards extends React.Component {  
  constructor(props){
    super(props)
    this.state = {           
      allBoards : [
        {
          id : "#1",
          title : 'test1',
          color : "rgb(254, 46, 46)"
        },
        {
          id : "#2",
          title : 'test2',
          color : "#FFEB5A"
        },
        {
          id : "#3",
          title : 'test3',
          color : "rgb(172, 250, 88)"
        },
        {
          id : "#4",
          title : 'test1',
          color : "rgb(100, 46, 254)"
        },
        
        'addBoard'
      ],
      hoverTarget : '',
      modal : false ,
      newBoardTitle : '',
      newBoardColor : 'white',
    }
    this.gotoMainPage = this.gotoMainPage.bind(this);
    this.getBoardTitle = this.getBoardTitle.bind(this);
    this.getBoardColor = this.getBoardColor.bind(this);
    this.deleteBoard = this.deleteBoard.bind(this);
    // 생성창 열고 닫기
    this.openModal =  this.openModal.bind(this);
    this.closeModal =  this.closeModal.bind(this);
    // 생성관련
    this.multipleElements = this.multipleElements.bind(this);
    this.separateElement = this.separateElement.bind(this);
    this.createBoard = this.createBoard.bind(this);

  }
deleteBoard(e){
  let newBoard = this.state.allBoards.slice();
  let deleteTarget = e.currentTarget.parentNode.className;
  newBoard = newBoard.filter((board,index) => {
    return board.id !== deleteTarget    
  })  
  this.setState({
    allBoards : newBoard
  })
  // e.preventDefault()
}
getBoardTitle(e){
  let boardTitle =  e.target.value
  this.setState({newBoardTitle : boardTitle})
}
getBoardColor(e){
  let boardColor = e.target.style.backgroundColor
  this.setState({newBoardColor : boardColor})
}

openModal(){
  this.setState({modal : true})
} 
closeModal(){
  this.setState({modal : false})
} 


multipleElements(Boards) {
  // 여기 참고 https://bit.ly/2Z6LhaP
  let elements = [];

  for(let i = 0; i < Boards.length; i++) 
  {
    if(Boards[i] !== 'addBoard')
    {
      let onMouseStyle = {
        borderRadius: "5px",
        background: Boards[i].color,
        display : "table",
        height : "12vh",
        opacity : "0.7",
        position : "relative",
        width: "20vw",    
        margin: "0 8px 8px 0",
        maxWidth : "250px",
        maxHeight : "150px",
        minHeight : "90px"
      }
      let outMouseStyle = {
        borderRadius: "5px",
        background: Boards[i].color,
        display : "table",
        height: "12vh",
        position : "relative",
        width: "20vw",    
        margin: "0 8px 8px 0",
        maxWidth : "250px",
        maxHeight : "150px",
        minHeight : "90px"
      }    
      elements.push(
          <li
            className = {Boards[i].id}   
            onMouseOver={(event) => { 
              this.setState({hoverTarget : event.target.className}) 
            }
            } 
            onMouseOut={(event) => { this.setState({hoverTarget : ""}) }}
            style = {
              this.state.hoverTarget === Boards[i].id ? 
              onMouseStyle : 
              outMouseStyle     
            }             
          >            
          <Link style = {styles.aTag} to = {"/SelectedBoard"}>        
            <div style = {{
              bottom: 0,
              left: 0,
              position: "absolute",
              right: 0,
              top: 0,
            }}>
              <p className = {Boards[i].title} style = {styles.boardTitle}>
                {Boards[i].title}
              </p>                       
            </div>            
          </Link>
          <IconButton
            style = {{
              bottom : 0,     
              right: 0,
              background: "none",
              position : "absolute"
            }}
            onClick = {this.deleteBoard}                
          > 
            <DeleteIcon />
          </IconButton> 
        </li>   
      )
    }
    else if(Boards[i] === 'addBoard')
    {
      elements.push(
        <li 
            // 여기와 밑의 className이 동일한 이유는 Hover이벤트 적용때문.....
          onMouseOver=
          {
            (event) => { 
              this.setState({hoverTarget : event.target.className}) 
            }
          } 
          onMouseOut={(event) => { this.setState({hoverTarget : ""}) }}
          style = {this.state.hoverTarget !== Boards[i] ? styles.liStyle : styles.hoverLiStyle} 
          onClick = {this.openModal}
        > 
          <div className = {Boards[i]} style = {styles.addBoardWrapper}> 
              <AddCircleRoundedIcon style = {styles.addBoard}/>
          </div>
        </li>      
      )
    }
  }
  return elements;
}
separateElement (Boards) { 
  let separateElements = [];
  let multiElements = this.multipleElements(Boards);
 
  for(let i = 0; i < multiElements.length; i+=4) {
  let oneRow = [];
  oneRow.push(multiElements.slice(i, i+4).map(title => {
    return (
      <div className ="item"> {title} </div>
      )
    }
  ))

  separateElements.push(oneRow.map(itm => {
    return <div style = {{display: "inline-flex"}}>
            {itm}
          </div>
      }
    ))
  }
  return separateElements;
 }    
createBoard(){
  let currentBoards = this.state.allBoards.slice();
  let newBoards =  {
    id : "#" + this.state.allBoards.length,
    title : this.state.newBoardTitle,
    color : this.state.newBoardColor
  }
  // 맨 뒤에 빈 값을 추가(슬롯 확장)) 후, addBoard를 뒤로 한칸 밀어놓는다.
  currentBoards.push(newBoards)     
  currentBoards[currentBoards.length-1] = currentBoards[currentBoards.length-2];
  
  currentBoards[currentBoards.length-2] = newBoards;

  this.separateElement(currentBoards);
  this.setState({allBoards : currentBoards});
}

gotoMainPage(){
  this.props.history.push("/")
}

componentDidMount(){
}



render(){    
  return (
      <div>
        <BoardHeader gotoMainPage = {this.gotoMainPage}/>
        <div style = {styles.listsWrapper}>
          <h3>전체 보드</h3>
            <ul style = {styles.ulStyle} >            
            {          
                this.separateElement(this.state.allBoards)
            }           
            </ul>
        </div>
        <AddBoard           
          createBoard = {this.createBoard} 
          closeModal = {this.closeModal}
          getBoardTitle = {this.getBoardTitle}
          getBoardColor = {this.getBoardColor}
          modalStatus = {this.state.modal}       
          newBoardColor = {this.state.newBoardColor}        
        />
    </div>
    );
  }
}


const styles = {
  listsWrapper : {
    margin: "40px auto",
    maxWidth: "1250px"
  },
  ulStyle : {
    listStyleType: "none",
  },
  liStyle : {
    borderRadius: "5px",
    background: "lightgray",
    display : "table",
    height: "12vh",
    width: "20vw",    
    margin: "0 8px 8px 0",
    maxWidth : "250px",
    maxHeight : "150px",
    minHeight : "90px"
  },
  hoverLiStyle : {
    borderRadius: "5px",
    background: "lightgray",
    display : "table",
    height : "12vh",
    opacity : "0.7",
    width: "20vw",    
    margin: "0 8px 8px 0",
    maxWidth : "250px",
    maxHeight : "150px",
    minHeight : "90px"
  },

  addBoard : {
    color : "white",
    fontSize: "40px", 
  },
  addBoardWrapper : {
    display : "table-cell",
    textAlign : "center",
    verticalAlign : "middle"
  },
  aTag : {
    textDecoration: "none",
  },
  boardTitle : {
    overflow: "hidden",
    textOverflow: "ellipsis",    
    fontSize: "16px",
    fontWeight: "700",
    color: "#fff",
    lineHeight: "20px",
    margin : "10px"
  },
}