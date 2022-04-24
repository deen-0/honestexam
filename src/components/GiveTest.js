import React, { useState,useEffect } from 'react'
import QuestionUI from './QuestionUI';
import UserNav from './UserNav'
import { useSelector,useDispatch } from 'react-redux';
import { getTestInfo, setTestId } from '../store/actions';
import { useNavigate,navigate } from 'react-router-dom';
import HomeUi from './HomeUi';



export default function UserUi(props){

  let key=useSelector((s)=>s.type)
  let user=useSelector((s)=>s.user.id);
  
  const d=useDispatch();
   

  
      //below function get test id entered by user
      const [input,setinput]=useState("");
    const getTestId =(e) => {setinput(e.target.value);
        console.log("input :"+input);
        if(e.target.value===""){setValidation(6);}
        if(e.target.value!==""){setValidation(2);}
       console.log(validation);
      }; 
     
      const[validation,setValidation]=useState(6);
      const[testinfo,settestinfo]=useState("");

    
      const validatedTestId= async()=>{
        if(user==="" || user===undefined){alert("you are logged out"); navigate(-1); }else{
        const respo=await fetch(`http://localhost:8080/user/validatekey/${input}`, { method: 'GET' })
        let t= await respo.json();
       console.log("i am validating test  "+t);
       if(t!==-1){ 
        key=d(setTestId(input)); 
        const res=await fetch(`http://localhost:8080/test/info/${input}`, { method: 'GET' })
        console.log(res);
         let t= await res.json();
        d(getTestInfo(t));
        startTest();}
       else setValidation(0);
       } }
      
       let navigate = useNavigate(); 
       const startTest = () =>{ 
         let path = `Instructions`; 
         navigate(path);
       }
  
    return (<div className='container'>
    
    
<div className="container my-3 text-center"><h1>Give test</h1>
<label>Enter Test Key</label>
<input type="test" value={input} onChange={(e) => getTestId(e)} ></input>

<button className="btn btn btn-success my-3 mx-3" style={{width:"150px"}}  onClick={validatedTestId}>Start Test</button>
<div className="container my-4 border border-primary" style={{height:20}}>
<QuestionUI validation={validation} />
</div>
</div>
    </div>
  );
}
