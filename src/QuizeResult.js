import React from 'react'
import './App.css';
import question from './quize'



function QuizeResult(props) {
//   const [passFail,setPassFail] = useState(true)
//   const setPassfail = {
//     if (score = 10) {
//        console.log("Pass") ;

//     }
//     else {
//         console.log("Fail");
//     }
// }

  return (
    <div className='score-section'>

      <h2>completed!</h2>
      <h4>Total score {props.score}/15</h4>
      <h4>Your correct question {props.correctAns} out of 3</h4>
      <h4>Average is {props.average}  </h4>
      
      <button onClick={props.handleplayAgain} >play Again</button>
  
    </div>
  );
}
export default QuizeResult
