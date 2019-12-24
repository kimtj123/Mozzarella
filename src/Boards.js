import React from 'react';

import AddBoard from './boards/addBoard';
import BoardHeader from './common/BoardHeader';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';


export default class Boards extends React.Component {  
  constructor(props){
    super(props)
    this.state = {
      hoverTarget : ''
    }
    this.targetList = this.targetList.bind(this);
    this.stateChange  = this.stateChange.bind(this);
    this.multipleElements = this.multipleElements.bind(this);
    this.separateElement = this.separateElement.bind(this);
    this.showAddBoard = this.showAddBoard.bind(this)
  }
  
targetList(event){
  let targetName =  event.target.className
  this.stateChange(targetName);

}  
stateChange(targetName) {
  this.setState = ({ 
    hoverTarget : targetName
  })
}
showAddBoard(){

}
multipleElements(Boards) {
  // 여기 참고 https://bit.ly/2Z6LhaP
  let elements = [];
  for(let i = 0; i < Boards.length; i++) 
  {
    if(Boards[i] !== 'addBoard')
    {
      elements.push(
        <li
          className = {Boards[i]}   
          onMouseOver={(event) => { 
            console.log('list :: ', this.state)
            this.setState({hoverTarget : event.target.className}) 
          }
          } 
          onMouseOut={(event) => { this.setState({hoverTarget : ""}) }}
          style = {this.state.hoverTarget !== Boards[i] ? styles.liStyle : styles.hoverLiStyle} 
        >
          <a style = {styles.aTag} href="/">
            <p className = {Boards[i]} style = {styles.boardTitle}>
              {Boards[i]}
            </p>
          </a>
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
              console.log('list :: ', this.state)
              this.setState({hoverTarget : event.target.className}) 
            }
          } 
          onMouseOut={(event) => { this.setState({hoverTarget : ""}) }}
          style = {this.state.hoverTarget !== Boards[i] ? styles.liStyle : styles.hoverLiStyle} 
        >
          <div className = {Boards[i]} style = {styles.addBoardWrapper}> 
            <a style = {styles.aTag} href="/">
              <AddCircleRoundedIcon style = {styles.addBoard}/>
            </a>
          </div>
        </li>       
      )
    }
  }
  return elements;
}
separateElement (Boards) { 
  var separateElements = [];
  var multiElements = this.multipleElements(Boards);
 
  for(var i = 0; i < multiElements.length; i+=4) {
        var oneRow = [];
        oneRow.push(multiElements.slice(i, i+4).map(title => {
        return (
          <div className ="item" > {title} </div>
          )
        }
      ))

  separateElements.push(oneRow.map(itm => {return <div style = {{display: "inline-flex"}}>{itm}</div>}))
  }
  return separateElements;
 }    

render(){
  let recentBoards = ['recent1','recent2']
  let allBoards = ['test1','test2','test3','test4','test5', 'test6', 'test7','addBoard']
  console.log(this.state)
  return (
      <div>
        <BoardHeader />
        <div style = {styles.listsWrapper}>
          <div>
            <h3>최근 조회</h3>
          </div>
          <ul style = {styles.ulStyle}>
            {          
                this.separateElement(recentBoards)                      
            }                           
          </ul>
        </div>
        <div style = {styles.listsWrapper}>
          <h3>전체 보드</h3>
            <ul style = {styles.ulStyle}>            
            {          
                this.separateElement(allBoards)
            }           
            </ul>
        </div>
        <AddBoard />
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
  addBoardWrapper : {
    display : "table-cell",
    textAlign : "center",
    verticalAlign : "middle"
  },
  addBoard : {
    color : "white",
    fontSize: "40px", 
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
  }
}