import React,{useEffect } from "react"
// import {boardDefault} from "./words"
import {AppContext} from "./App"
import {nanoid} from "nanoid"

import Key from "./Key"
export default function Keyboard(){
    const {onEnter,onSelectLetter,onDelete,disabledLetters} = React.useContext(AppContext);

    const keys1 = ["Q","W","E","R","T","Y","U","I","O","P"];
    const keys2 = ["A","S","D","F","G","H","J","K","L"];
    const keys3 = ["Z","X","C","V","B","N","M"];
    // const keys = keys1.concat(keys2).concat(keys3);
    // console.log(keys);
   

    const handleKeyboard = React.useCallback((event)=>{
        if(event.key ==="Enter"){
            onEnter()
        }else if(event.key === "Backspace"){
            onDelete()
        }
        else{
            // const keys = keys1.keys2.keys3;
            // console.log(keys);
            keys1.forEach((key)=>{
                if(event.key.toUpperCase() === key.toUpperCase()){
                    onSelectLetter(key)
                }
            })
            keys2.forEach((key)=>{
                if(event.key.toUpperCase() === key.toUpperCase()){
                    onSelectLetter(key)
                }
            })
            keys3.forEach((key)=>{
                if(event.key.toUpperCase() === key.toUpperCase()){
                    onSelectLetter(key)
                }
            })
        }
    });

    

    useEffect(()=>{
        document.addEventListener("keydown",handleKeyboard)

        return()=>{
            document.removeEventListener("keydown",handleKeyboard)
        }
    },[handleKeyboard])
    return(
        <div className="keyboard" onKeyDown={handleKeyboard}>
            <div className="line1">{
                keys1.map((key)=>{
                    return <Key keyVal={key} key={nanoid()} disabled={disabledLetters.includes(key)}/>
                })
            }</div>
            <div className="line2">
            {
                keys2.map((key)=>{
                    return <Key keyVal={key} key={nanoid()} disabled={disabledLetters.includes(key)}/>
                })
            }
            </div>
            <div className="line3">
                <Key keyVal={"ENTER"} bigKey key={nanoid()} />
            {
                keys3.map((key)=>{
                    return <Key keyVal={key} key={nanoid()} disabled={disabledLetters.includes(key)}
                    />
                })
            }
            <Key keyVal={"DELETE"} bigKey key={nanoid()}/>
            </div>
        </div>
        )

}