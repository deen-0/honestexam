import React, { useState, } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import UserUi from './GiveTest';

export default function MainUi() {
  let navigate = useNavigate(); 
  const routeChange = () =>{  if(user==="" || user===undefined){alert("you are logged out"); navigate(-1); }
  else { let path = `GiveTest`; 
    navigate(path);}
  }
  let user=useSelector((s)=>s.user.id);
  const routeCreateTest = () =>{ 
    if(user==="" || user===undefined){alert("you are logged out"); navigate(-1); }
    else {let path = `CreateTest`; 
    navigate(path);}
  }
  return (
    <div className="grid-container">
<button type="button" className="btn btn-outline-danger" onClick={routeCreateTest} >Create Test</button>
<button type="button" className="btn btn-outline-danger" >Manage Test</button>
<button type="button" className="btn btn-outline-danger" onClick={routeChange}>Give Test</button>
<button type="button" className="btn btn-outline-danger">View Result</button>



</div>
  )
}
