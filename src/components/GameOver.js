import React from "react"

import {AppContext} from "./App"

export default function GameOver(){
    const {
        
        currAttempt,
        gameOver,
      
        correctWord,
       
      } = React.useContext(AppContext);
     

      const clickHandler = function(){
        window.location.reload(false);
      }
      return (
        <div className="gameOver">
          <h3>
            {gameOver.guessedWord
              ? "You Correctly Guessed the Wordle"
              : "You Failed to Guess the Word"}
          </h3>
          <h1>Correct Word: {correctWord}</h1>
          {gameOver.guessedWord && (<div>
            <h3>You guessed in {currAttempt.attempt} attempts</h3>
             <h1 className="restart--button" onClick={clickHandler}>Start a new game?</h1> 
             </div>
          )}

        </div>
      );
    }
