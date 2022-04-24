import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';

export default function Submitquestions() {

    const testId=useSelector((state)=>state.testId)

let tinfo=useSelector((state)=>state.testInfo);



//questions handelligng
const [a,seta]=useState("");
const[Question,setQuestion]=useState({
  
    question:"",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    answer:"",
    test_id: testId
  
  })
const Qu={
  
    question:"",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    answer:"",
    test_id: testId
  
  }
let  navigate =useNavigate();
 const submittest=()=>{
let path="/UserUi";
navigate(path);
 }
 
  
  const handleque=(e)=>{
    const value =e.target.value; const getans=(e)=>{
    seta(e.target.value);
   console.log(Question);
  } 
    setQuestion({...Question,[e.target.name] : value});
    console.log(Question);
  }

  const userurl="http://localhost:8080/question";

  const axios = require('axios').default;

  const sendQuestion= async () => {
      try {
          const resp = await axios({
              method: 'POST',
              url: userurl,
              data: Question
          });
          if(await resp.data){
            alert("Questtion Uploaded")
           setQuestion(Qu);
          }
         
      } catch (err) {
          // Handle Error Here
          console.error(err);
      }
  }
  


  return (
    <>

    <div className="container my-10">
<table className="table align-left">
<thead>
  <tr className="table-info">
   
    <th scope="col" className='bg-info text-left'><h2 className="contaioner  ">Test Details</h2></th>
  </tr>
</thead>
<tbody>
  <tr className="table-info table-primary">
    <th scope="row">Test Key </th>
    <td>{testId}</td>
    </tr>
  <tr className="table-info table-primary">
    <th scope="row">Title </th>
    <td>{tinfo.title}</td>
   </tr>

  <tr className="table-info">
    <th scope="row">description</th>
    <td>{tinfo.description}</td>
   
  </tr>
  <tr className="table-info">
    <th scope="row">No of questions</th>
    <td>{tinfo.noOfQ}</td>
    
  </tr>
</tbody>
</table>
</div>

  <div className="container my-10 text-center" ><h1 className='my-3'>Add questions to your Test</h1>
</div>


<div className="row">
<div className="col-sm"> </div>
<div className="col-sm">

<div className="input-group-lg my-3">
  <span className="input-group-text align-top">Question</span>
  <textarea className="form-control" name='question' value={Question.question} onChange={(e) => handleque(e)} placeholder='Enter a Brief description of your test' aria-label="With textarea"></textarea>
</div>


<div className="input-group input-group-sm mb-3">
<span className="input-group-text" id="inputGroup-sizing-sm">Option 1</span>
<input type="text" className="form-control" name="option1" value={Question.option1} onChange={(e) => handleque(e)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>
<div className="input-group input-group-sm mb-3">
<span className="input-group-text" id="inputGroup-sizing-sm">Option 2</span>
<input type="text" className="form-control" name="option2" value={Question.option2} onChange={(e) => handleque(e)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>

</div>
<div className="input-group input-group-sm mb-3">
<span className="input-group-text" id="inputGroup-sizing-sm">Option 3</span>
<input type="text" className="form-control" name="option3" value={Question.option3} onChange={(e) => handleque(e)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
</div>
<div className="input-group input-group-sm mb-3">
<span className="input-group-text" >Option 4</span>
<input type="text" className="form-control" name="option4" value={Question.option4} onChange={(e) => handleque(e)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>

</div>
<div className="input-group input-group-sm mb-3">
<span className="input-group-text" >Answer</span>
<input type="text" className="form-control" name="answer" value={Question.answer} onChange={(e) => handleque(e)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>

</div>

<div className="container text-center">
<button className="btn btn btn-success my-3 mx-3"   onClick={sendQuestion}>Upload Question</button>
</div>

<div className="container text-center">
<button className="btn btn btn-success my-3 mx-3"   onClick={submittest}>submit Test</button>
</div>

</div>
<div className="col-sm"></div>
</div>


    </>
  );

  
}
