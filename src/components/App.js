import React,{useState} from 'react';

import Board from "./Board"
import Keyboard from "./Keyboard"
import {boardDefault} from "./words"
import GameOver from "./GameOver"
import wordData from "./wordData"

import {createContext} from "react"

export const AppContext = createContext()

export default function App() {
    const [board,setBoard] = useState(boardDefault);
    const [currAttempt, setCurrAttempt] = React.useState({attempt: 0, letterPos: 0})
    // const correctWord  = wordData()
    const [correctWord, setCorrectWord] = React.useState(wordData[Math.floor(Math.random() * wordData.length)]);
    const [disabledLetters, setDisabledLetters] = React.useState([]);

    const [gameOver,setGameOver] = useState({gameOver:false, guessedWord:false})
    console.log(correctWord)
   // setCorrectWord(correctWord.toUpperCase())
     console.log(correctWord.name);
    //console.log(correctWord)

    // React.useEffect(()=>{
    //     setCorrectWord(correctWord.toUpperCase())
    // },[])
   // console.log(typeof correctWord);
    const onSelectLetter = (keyVal) => {
        if(currAttempt.letterPos > 4) return;
        const newBoard = [...board]
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
        setBoard(newBoard);
        setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1 })
    }
    const onDelete = () => {
        if(currAttempt.letterPos===0) return;
        const newBoard = [...board]
        newBoard[currAttempt.attempt][currAttempt.letterPos-1] = "";
        setBoard(newBoard);
        setCurrAttempt({...currAttempt, letterPos:currAttempt.letterPos-1})
    }
   
    const onEnter = () => {
        if(currAttempt.letterPos !==5)return;

        let currWord = "";
        for(let i= 0 ;i<5;i++){
            currWord  += board[currAttempt.attempt][i];
        }
        // console.log(currWord)
        // console.log(wordData)
        if(wordData.includes(currWord)){
            setCurrAttempt({attempt:currAttempt.attempt +1, letterPos: 0})
        }
        else{
            window.alert("Not a word")
        }
        if(currWord === correctWord){
            setGameOver({gameOver:true, guessedWord: true})
            return;
        }
        console.log(currAttempt.attempt)
        if (currAttempt.attempt ===5){
            setGameOver({gameOver:true,guessedWord:false})
        }

        
    }
    

    return(
        <div className='App'>
            <nav><h1>Wordle</h1></nav>
                
        <AppContext.Provider value={{board,setBoard,currAttempt,setCurrAttempt,onSelectLetter,onDelete,onEnter,correctWord,setDisabledLetters,disabledLetters,setGameOver,gameOver}}>
        <Board/>
        {gameOver.gameOver ? <GameOver/> : <Keyboard/>}
        </AppContext.Provider>
        </div>
    )
}