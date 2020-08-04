import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function CustomButton(props){
    return(
    <button className={props.btn}>{props.text}</button>


    )
}

export default CustomButton;