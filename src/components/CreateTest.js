import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getTestInfo,setTestId } from '../store/actions';
import { useNavigate } from 'react-router-dom';

export default function CreateTest() {

  let key=useSelector((state)=>state.type)
  let ci =useSelector((state)=>state.user.id);

  const[Ctest,setCtest]=useState({
    creater_Id:ci,
    title:"",
    description:"",
    noOfQuestion:''
  });

  const handleChange =(e) => {
   
    const value =e.target.value;
    setCtest({...Ctest,[e.target.name] : value});
  }; 


  const setinfo=async(x)=>{
    const response=await fetch(`http://localhost:8080/test/info/${x}`, { method: 'GET' })
            console.log(response);
             let t= await response.json();
            key=d(getTestInfo(t));
    }
  
  
  
const d=useDispatch();
const navigate=useNavigate();


const submitTest = async () =>{
  try {
      const resp = await axios({
          method: 'POST',
          url: 'http://localhost:8080/test',
          data: Ctest
      });
      key=d(setTestId(resp.data));
        setinfo(resp.data);
        key=d(setTestId(resp.data));
        alert("this is your test key please save it " +resp.data);
        let path="submitquestion";
        navigate(path);
      
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
}
  return (
    <>
    <div className="container my-10"><h1 className='my-3'>Fill the Test Info</h1>
    <div className="input-group input-group-lg">

  <span className="input-group-text" id="inputGroup-sizing-lg">Title</span>
  <input type="text" placeholder='Enter Title here' name='title' value={Ctest.title} onChange={(e) => handleChange(e)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
</div>

<div className="input-group-lg my-3">
  <span className="input-group-text align-top">Description</span>
  <textarea className="form-control" name='description' value={Ctest.description} onChange={(e) => handleChange(e)} placeholder='Enter a Brief description of your test' aria-label="With textarea"></textarea>
</div>

<div className="input-group input-group-lg">
  <span className="input-group-text" id="inputGroup-sizing-lg">No of Questions</span>
  <input type="number" name='noOfQuestion' className="form-control" value={Ctest.noOfQuestion} onChange={(e) => handleChange(e)}  placeholder='Enter the No of question in your test' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
</div>

<div className="container text-center">
<button type="button" className="btn btn-success btn-lg my-5" onClick={submitTest}>Create Test</button>
</div>
    </div>
    </>
  );}
