import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getQuestions,saveUser,storeKey,saveAns} from "../store/actions"





export default function TestUI(props) {

const[i,seti]=useState(0);
  let questions=useSelector((state)=>state.questions)
  let question=questions[i];
  let n=questions.length-1;
  let j=0;
  
const [an,setans]=useState({
        q_id:"",
        ans:""
});
const d=useDispatch();
 
const getans=(e)=>{
    let a=an;
    a.q_id=question.id
    a.ans=e.target.value;
    setans(a);
   d(saveAns(an));
   console.log()
}

function  prev(){if (i===0){} else {seti(j--)}
   console.log(i);};
function  next(){if(i===n){} else {seti(++j)} 
  console.log(i);};
console.log(question)
  return (<>
    <div class="container mt-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-10 col-lg-10">
            <div class="border">
                <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row justify-content-between align-items-center mcq">
                        <h4></h4><span>({i+1}of{n+1})</span>
                    </div>
                </div>
                <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                        <h3 class="text-danger">Q.</h3>
                        <h5 class="mt-1 ml-2">{question.question}</h5>
                    </div>
                    <div class="ans ml-2" >
                        <label class="radio"> <input type="radio" name="options"  value={question.option1} onChange={(e)=>getans(e)}/> <span>{question.option1}</span>
                        </label>
                    </div>
                    <div class="ans ml-2">
                        <label class="radio"> <input type="radio" name="options" value={question.option2} onChange={(e)=>getans(e)} /> <span>{question.option2}</span>
                        </label>
                    </div>
                    <div class="ans ml-2">
                        <label class="radio"> <input type="radio" name="options" value="Indonesia"/> <span>option3</span>
                        </label>
                    </div>
                    <div class="ans ml-2">
                        <label class="radio"> <input type="radio" name="options" value="Russia"/> <span>option4</span>
                        </label>
                    </div>
                </div>
                <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white"> <button className="btn-danger mx-3" onClick={prev}>prev</button>
    <button className="btn-danger" onClick={next}>next</button></div>
            </div>
        </div>
    </div>
</div>
   
    </>
  )
}
