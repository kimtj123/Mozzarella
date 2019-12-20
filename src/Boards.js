import React from 'react';
import Header from './common/Header';

export default function Main(props) {  

  return (
    <div>
      <Header />
      <div>
        <div>
          <h3>최근 조회</h3>
        </div>
        <ul style = {styles.ulStyle}>
            <li style = {styles.liStyle}>
              <a href="/">
                    <span>

                    </span>
                </a>
            </li>
        </ul>
      </div>
      <div>
        <h3>전체 보드</h3>
      </div>
  </div>
  );
}


const styles = {
  ulStyle : {
    listStyleType: "none",
  },
  liStyle : {
    height: "120px",
    width: "200px",
    borderRadius: "5px",
    background: "lightgray",
  }
}