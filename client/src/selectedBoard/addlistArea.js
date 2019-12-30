import React from 'react';

import AddIcon from '@material-ui/icons/Add';

export default function AddListButton(props){  
    return (
        <div 
        style = {props.state === props.name ? 
            styles.beforeClick :
            styles.afterClick 
        }  
        name = {props.name}
        onClick = {props.openAddList}
        >
            <span className = "placeholder" name = {props.name}>
                <span className = "addListElements" style = {styles.createListElements} name = {props.name}>
                    <AddIcon name = {props.name}/>
                </span>
                <span style = {styles.createListElements} name = {props.name}>
                    리스트 추가
                </span>                              
            </span>                            
        </div>  
    );
}

const styles = {
    beforeClick: {
        display: "none",        
    },
    afterClick: {
        textDecoration: "none",
    },
    createListElements : {
        color:"black",
        display: "table-cell", 
        lineHeight: "0px",
        verticalAlign : "middle",
    },    
}