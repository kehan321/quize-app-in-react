import React, { useState } from 'react';
import './App.css';
import QuizeResult from './QuizeResult'


function Quize() {
    const question = [
        {
            questionText:"who is the owner of amazon?",
            answerOption:[ 
                {anserText:"Jeff Bezos ",iscorrect:true},
                {anserText:"Mesos Bezos ",iscorrect:false},
                {anserText:"Kerof Bezos ",iscorrect:false},
                {anserText:"Fezz Bezos ",iscorrect:false},
    
            ]
        },
        {
            questionText:"who is the owner of roblox?",
            answerOption:[ 
                {anserText:"Mark zakarbark ",iscorrect:false},
                {anserText:"Mesos Bezos ",iscorrect:false},
                {anserText:"Baszucki  ",iscorrect:true},
                {anserText:"Ali baba ",iscorrect:false},
    
            ]
        },
        {
            questionText:"8 divisible by 2 is?",
            answerOption:[ 
                {anserText:"3 ",iscorrect:false},
                {anserText:"4",iscorrect:true},
                {anserText:"8",iscorrect:false},
                {anserText:"5",iscorrect:false},
    
            ]
        },
    ];
    const [score,setScore] = useState(0)
    const [correctAns,setCorrectAns] = useState(0)
    const [clicked,setClicked] = useState(false)

    const handleplayAgain =()=>{
        setCurrentQuestion(0)
        setScore(0)
        setCorrectAns(0)
        setShowResult(false)
    }
    const handllAnswerOption = (iscorrect)=>{

        if(iscorrect){

            setScore(score+5)
            setCorrectAns(correctAns+1)
        }
        setClicked(true)
    }

    const average= score/3;





    const [showResult,setShowResult] =useState(false)
    const [currentQuestion,setCurrentQuestion] = useState(0)
    const handleNextquestion=()=>{
        setClicked(false)
        const nextQuestion = currentQuestion+1;
        if(nextQuestion<question.length){
            setCurrentQuestion(nextQuestion)
            
        }
        else{
            setShowResult(true)
        }
        
        
    }
    return (
        <div className="App">
        {/* {console.log(question.length)} */}
        {showResult?(<QuizeResult handleplayAgain={handleplayAgain} score={score} correctAns={correctAns} average ={average}/>):(<>        <div className="question-section">
            <h5>Score:{score}</h5>
            <div className='question-count' >
                <span>Question {currentQuestion+1} of {question.length}</span>
            </div>
            <div className='question-text' >
                {question[currentQuestion].question}
            </div>
        </div>
        <div className="answer-section">
            {question[currentQuestion].answerOption.map((ans, i)=><button className={   `button ${clicked && ans.iscorrect?"correct":"button"}`}
            disabled={clicked} onClick={()=>handllAnswerOption(ans.iscorrect)} key={i}>{ans.anserText}</button>)}
            <div className='actions' >
                <button onClick={handleplayAgain}>Quit</button>
                <button disabled={!clicked} onClick={handleNextquestion }>Next</button>
            </div>
        </div></>)}


    </div>
  );
}

export default Quize;
