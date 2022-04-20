import React, { useState,useEffect } from 'react'
import QuestionUI from './QuestionUI';
import UserNav from './UserNav'
import { useSelector,useDispatch } from 'react-redux';
import { getTestInfo, setTestId } from '../store/actions';
import { useNavigate } from 'react-router-dom';



export default function UserUi(props){
    
     let key=useSelector((state)=>state.type)
const d=useDispatch();
      //below function get test id entered by user
      const [testid,settestid]=useState("");
    const getTestId =(e) => {settestid(e.target.value);
        console.log(testid);
        if(e.target.value===""){setValidation(6);}
        if(e.target.value!==""){setValidation(2);}
       console.log(validation);
      }; 
      

      const[validation,setValidation]=useState(6);
      const[testinfo,settestinfo]=useState("");

      
      const validatedTestId= async()=>{
         
        const response=await fetch(`http://localhost:8080/user/validatekey/${testid}`, { method: 'GET' })
        let t= await response.json();
       console.log("i am validating test"+t);
       if(t!==-1){ key=d(setTestId(testid)) ; 
        const response=await fetch(`http://localhost:8080/test/info/${testid}`, { method: 'GET' })
        console.log(response);
         let t= await response.json();
        d(getTestInfo(t));
        startTest();}
       else setValidation(0);

       } 
      
       let navigate = useNavigate(); 
       const startTest = () =>{ 
         let path = `Instructions`; 
         navigate(path);
       }
  
    return (<div className='container'>
    
    
<div className="container my-3 text-center"><h1>Give test</h1>
<label>Enter Test Key</label>
<input type="test" value={testid} onChange={(e) => getTestId(e)} ></input>

<button className="btn btn btn-success my-3 mx-3" style={{width:"150px"}}  onClick={validatedTestId}>Start Test</button>
<div className="container my-4 border border-primary" style={{height:20}}>
<QuestionUI validation={validation} />
</div>
</div>
    </div>
  );
}
