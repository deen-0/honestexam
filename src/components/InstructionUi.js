import React from 'react'
import { useNavigate, } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getQuestions} from "../store/actions"



export default function InstructionUI() {
    
  
  const testId=useSelector((state)=>state.testId)
  let userid=useSelector((s)=>s.user.id);
  let questions=useSelector((state)=>state.type);
  
  const d=useDispatch();
  let navigate = useNavigate();

    const question =async()=>{ 
      
      let y= await adduser();
      if(y==0){
        await getq();
        let path = `TestUi`; 
        navigate(path);
       console.log("i am proceeding");
       
      }else{alert("you already appeared in exam"); navigate(-1)}
     
    }
const getq=async()=>{
    const response=await fetch(`http://localhost:8080/getQuestions/${testId}`, { method: 'GET' })
    let t= await response.json();
    questions=d(getQuestions(t));
 
}
    const adduser=async()=>{
      const response=await fetch(`http://localhost:8080/user/giveTest/${userid}/${testId}`, { method: 'GET' })
      let y= await response.json();
      console.log(y);
      return y
    }


    let tinfo=useSelector((state)=>state.testInfo);


  return (<><div className="container text-center w-75 h-75 align-text-bottom">
<div className="container my-12">

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
<h1>
<button type="button" className="btn btn-danger btn-lg" onClick={question}>Proceed</button>

</h1>

  </div>


  </>
   
  )
}
