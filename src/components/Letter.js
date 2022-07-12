import React,{useContext} from "react"
// import {boardDefault} from "./words"
import { AppContext } from "./App";

export default function Letter({letterPos,attemptVal}){
    const {board , correctWord, currAttempt,setDisabledLetters} = useContext(AppContext)
    const letter = board[attemptVal][letterPos];
    const correct = correctWord[letterPos] === letter;
    // console.log(typeof correctWord);
    const almost = !correct && letter !== "" && correctWord.includes(letter);


    const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error");

    React.useEffect(()=>{
        if(letter !== "" && !correct && !almost){
            setDisabledLetters((prev) => [...prev, letter])
        }

    } , [currAttempt]);
    return (
        <div className="letter" id={letterState}>{letter}</div>
    )
}