import React from 'react';
import AddIcon from '@material-ui/icons/Add';


export default function AddListButton(props){  
    return (
        <div href = "#" style = {styles.aTag} onClick = {props.addContent}>
            <span className = "placeholder" >
                <span className = "addListElements" style = {styles.addListElements}>
                    <AddIcon />
                </span>
                <span style = {styles.addListElements}>
                    리스트 추가
                </span>                                
            </span>                            
        </div>  
    );
}

const styles = {
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