import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveAns} from "../store/actions"





export default function TestUI(props) {
let path=useNavigate();
const[i,seti]=useState(0);
  let questions=useSelector((state)=>state.questions)
  let testId=useSelector((s)=>s.testId);
  let user=useSelector((s)=>s.user.id);
  let question=questions[i];
  let n=questions.length-1;
  let j=0;
  
const [ans,setAns]=useState("");
const d=useDispatch();
 
const getans=async(e)=>{
    let q_id=question.id
    setAns(e.target.value);
    const respo=await fetch(`http://localhost:8080/UpdateAns/${user}/${testId}/${q_id}/${ans}`, { method: 'GET' });
    console.log(respo);
}

const submit=()=>{

path(-3)
}

function  prev(){if (i===0){} else {seti(j--)}
   console.log(i);};
function  next(){if(i===n){} else {seti(++j)} 
  console.log(i);};
console.log(question)
  return (<>
    <div className="container mt-5">
    <div className="d-flex justify-content-center row">
        <div className="col-md-10 col-lg-10">
            <div className="border">
                <div className="question bg-white p-3 border-bottom">
                    <div className="d-flex flex-row justify-content-between align-items-center mcq">
                        <h4></h4><span>({i+1}of{n+1})</span>
                    </div>
                </div>
                <div className="question bg-white p-3 border-bottom">
                    <div className="d-flex flex-row align-items-center question-title">
                        <h3 className="text-danger">Q.</h3>
                        <h5 className="mt-1 ml-2">{question.question}</h5>
                    </div>
                    <div className="ans ml-2" >
                        <label className="radio"> <input type="radio" name="options"  value={question.option1} onChange={(e)=>getans(e)}/> <span>{question.option1}</span>
                        </label>
                    </div>
                    <div className="ans ml-2">
                        <label className="radio"> <input type="radio" name="options" value={question.option2} onChange={(e)=>getans(e)} /> <span>{question.option2}</span>
                        </label>
                    </div>
                    <div className="ans ml-2">
                        <label className="radio"> <input type="radio" name="options" value="Indonesia"/> <span>option3</span>
                        </label>
                    </div>
                    <div className="ans ml-2">
                        <label className="radio"> <input type="radio" name="options" value="Russia"/> <span>option4</span>
                        </label>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center p-3 bg-white"> <button className="btn-danger mx-3" onClick={prev}>prev</button>
    <button className="btn-danger" onClick={next}>next</button>
    <button className="btn-danger" onClick={submit}>End Test</button>
    
    </div>
            </div>
        </div>
    </div>
</div>
   
    </>
  )
}
