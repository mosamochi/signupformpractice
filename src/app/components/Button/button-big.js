
import React from "react";
import './button-big-styles.css'

export default function Button(props){
const text = props.text
const color = props.color
const handleClick = props.handleClick

    return (
     
        <button  key={color} className={`button-${color}`} onClick={handleClick} type={props.type}>{text}</button>
    )
}