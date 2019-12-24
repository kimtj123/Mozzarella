import React from 'react';

export default class addBoard extends React.Component {  
  constructor(props){
    super(props)
    this.state = {
      hoverTarget : ''
    }
  }
  


render(){  
  return (
    // 전체화면을 덮는 div
    <div className ="coverWholeDisplay"> 
      추가창입니다.
      {/*여긴 아니다 */}
      <div className = "windowWrapper">      
        <form>
          <div className = "formContatiner">
            <div>
              <div>제목</div>
              <ul>테마설정</ul>
            </div>
            <div>
              생성버튼
            </div>
          </div>
        </form>
      </div>
    </div>
    );
  }
}


const styles = { 
}