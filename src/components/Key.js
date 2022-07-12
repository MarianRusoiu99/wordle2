import React from "react"
import {AppContext} from "./App"

export default function Key({keyVal, bigKey ,disabled}){
    const {onEnter,onSelectLetter,onDelete} = React.useContext(AppContext);
    

    const selectLetter = () =>{
        if(keyVal ==="ENTER"){
            onEnter()
        }else if(keyVal==="DELETE"){
           onDelete()
        }
        else{
       
        onSelectLetter(keyVal)
            
    }}

    return(
        <div className="key" id = { bigKey ? "big" : disabled && "disabled"}  onClick={selectLetter}>
            {keyVal}
            </div>)
}