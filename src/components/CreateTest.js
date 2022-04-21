import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getTestInfo,setTestId } from '../store/actions';

export default function CreateTest() {

  let key=useSelector((state)=>state.type)
  

  let ci =useSelector((state)=>state.user.id);
  const[Ctest,setCtest]=useState({
    creater_Id:ci,
    title:"",
    description:"",
    noOfQuestion:''
  });
  
  console.log("creater"+ci);
  const d=useDispatch();
  const handleChange =(e) => {
   
   
    const value =e.target.value;
    setCtest({...Ctest,[e.target.name] : value});
    console.log(Ctest)
  }; 

const [x,setx]=useState(0);


const submitTest = async () => {
  try {
      const resp = await axios({
          method: 'POST',
          url: 'http://localhost:8080/test',
          data: Ctest
      });
      key=d(setTestId(resp.data));
        setinfo(resp.data);
        key=d(setTestId(resp.data));
        alert("this is your test key please save it " +resp.data)
        setx(1);
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
}

const testId=useSelector((state)=>state.testId)
const setinfo=async(x)=>{
const response=await fetch(`http://localhost:8080/test/info/${x}`, { method: 'GET' })
        console.log(response);
         let t= await response.json();
        key=d(getTestInfo(t));
}
let tinfo=useSelector((state)=>state.testInfo);
  if(x==0){
  return (
    <>
    <div className="container my-10"><h1 className='my-3'>Fill the Test Info</h1>
    <div class="input-group input-group-lg">

  <span class="input-group-text" id="inputGroup-sizing-lg">Title</span>
  <input type="text" placeholder='Enter Title here' name='title' value={Ctest.title} onChange={(e) => handleChange(e)} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
</div>

<div class="input-group-lg my-3">
  <span class="input-group-text align-top">Description</span>
  <textarea class="form-control" name='description' value={Ctest.description} onChange={(e) => handleChange(e)} placeholder='Enter a Brief description of your test' aria-label="With textarea"></textarea>
</div>

<div class="input-group input-group-lg">
  <span class="input-group-text" id="inputGroup-sizing-lg">No of Questions</span>
  <input type="number" name='noOfQuestion' class="form-control" value={Ctest.noOfQuestion} onChange={(e) => handleChange(e)}  placeholder='Enter the No of question in your test' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
</div>

<div className="container text-center">
<button type="button" class="btn btn-success btn-lg my-5" onClick={submitTest}>Create Test</button>
</div>
    </div>
    </>
  );}else if(x==1){
    return(
      <>

      <div className="container my-10">
<table class="table align-left">
<thead>
    <tr class="table-info">
     
      <th scope="col" className='bg-info text-left'><h2 className="contaioner  ">Test Details</h2></th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-info" className="table-primary">
      <th scope="row">Title </th>
      <td>{tinfo.title}</td>
     
    </tr>
    <tr class="table-info">
      <th scope="row">description</th>
      <td>{tinfo.description}</td>
     
    </tr>
    <tr class="table-info">
      <th scope="row">No of question</th>
      <td>{tinfo.noOfQ}</td>
      
    </tr>
  </tbody>
</table>
</div>

    <div className="container my-10 text-center" ><h1 className='my-3'>Add Questions to your Test</h1>
</div>


<div class="form-group row">
  <div class="col-xs-2">
    <label for="ex1">col-xs-2</label>
    <input class="form-control" id="ex1" type="text"/>
  </div>
  <div class="col-xs-3">
    <label for="ex2">col-xs-3</label>
    <input class="form-control" id="ex2" type="text"/>
  </div>
  <div class="col-xs-4">
    <label for="ex3">col-xs-4</label>
    <input class="form-control" id="ex3" type="text"/>
  </div>
</div>
 

      </>
    );


  }else{}
};
