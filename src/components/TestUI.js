import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveAns} from "../store/actions"





export default function TestUI(props) {
let path=useNavigate();
const[i,seti]=useState(0);
const[r,setr]=useState(0);
const[rs,setrs]=useState(0);
  let questions=useSelector((state)=>state.questions)
  let testId=useSelector((s)=>s.testId);
  let user=useSelector((s)=>s.user.id);
  let question=questions[i];
  let n=questions.length;//4
  

const d=useDispatch();
 
const getans=async(e)=>{
    let q_id=question.id
   let ans=e.target.value;
    const respo=await fetch(`http://localhost:8080/UpdateAns/${user}/${testId}/${q_id}/${ans}`, { method: 'GET' });
    console.log(respo);
}
let Result;
const submit=async()=>{
    const res=await fetch(`http://localhost:8080/result/${user}/${testId}`, { method: 'GET' });
    Result= await res.json();
    console.log(Result);
    setrs(Result);
    await alert("you have scored"+Result);
    await setr(1);
    setrs(Result);
}

const prev=async()=>{
    if(i==0){
    }else seti(i-1);
}


const next=async()=>{
    if(i==n-1){
    }else seti(i+1);
}


if(r===0){
  return (<>
    <div className="container mt-5">
    <div className="d-flex justify-content-center row">
        <div className="col-md-10 col-lg-10">
            <div className="border">
                <div className="question bg-white p-3 border-bottom">
                    <div className="d-flex flex-row justify-content-between align-items-center mcq">
                        <h4></h4><span>({i+1}of{n})</span>
                    </div>
                </div>
                <div className="question bg-white p-3 border-bottom">
                    <div className="d-flex flex-row align-items-center question-title">
                        <h3 className="text-danger">Q.</h3>
                        <h5 className="mt-1 ml-2">{question.question}</h5>
                    </div>
                    <button type="button" className="btn btn-secondary my-3" value={question.option1} onClick={(e) => getans(e)}>{question.option1}</button>
                    <div></div>
                    <button type="button" className="btn btn-secondary my-3" value={question.option2} onClick={(e) => getans(e)}>{question.option2}</button>
                  
                    <div></div>
                    <button type="button" className="btn btn-secondary my-3" value={question.option3} onClick={(e) => getans(e)}>{question.option3}</button>
                  
                    <div></div>
                    <button type="button" className="btn btn-secondary my-3" value={question.option4} onClick={(e) => getans(e)}>{question.option4}</button>
                  
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
}else if(r===1){return (<><div className="container text-center">
<div> Thank you,</div>

 your Test is submmited successfully
 <h6>you have scored</h6>
<h1>{rs}</h1>


</div>
</>)}else{}
}
