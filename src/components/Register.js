import React from 'react'
import '../App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../store/actions';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Register(props) {
  const [user, setUser] = useState({
    User_id:"",
    firstName:"",
    lastName:"",
    email:"",
    password:""
});
let navigate = useNavigate();
let storeUser=useSelector((state)=>state.type)
const d=useDispatch();
//function for reading inputs
const handleChange =(e) => {
  const value =e.target.value;
  setUser({...user,[e.target.name] : value});
}; 

  //functoin for validating user
  const getUser=(e)=>{
    storeUser=d(saveUser(user));
    e.preventDefault();
    console.log(storeUser.email +user.email)
    validemail();
    console.log("user is validating" + user.email+user.password);
  }

  const validemail =async()=>{ 
    const response=await fetch(`http://localhost:8080/validemail/${user.email}`, { method: 'GET' })
    let t= await response.json();
    if(t){
      validuser();
    }
    else{alert("no user found for mail")};
  }
  const validuser =async()=>{ 
    const response=await fetch(`http://localhost:8080/validuser/${user.email}/${user.password}`, { method: 'GET' })
if(response==null){ alert("check your Password");}
    let z= await response.json();
    console.log(z);
    if(z){
      const response=await fetch(`http://localhost:8080/getuser/${user.email}/${user.password}`, { method: 'GET' })
    let z= await response.json();
    storeUser=d(saveUser(z));
      console.log("login in")
        console.log("i am proceeding")
        let path = `UserUi`; 
         navigate(path);
    }
    else{
     alert("check password");
     
    };
  }

  const userurl="http://localhost:8080/user";

  const axios = require('axios').default;

  const createUser= async () => {
      try {
          const resp = await axios({
              method: 'POST',
              url: userurl,
              data: user
          });
  
         if(resp.data){
           alert("Account created  Login-in")
          

         }else{alert("email already exist")}
      } catch (err) {
          // Handle Error Here
          console.error(err);
      }
  }
  

  //function for storing data to database
  
  
 

  // const regUser =async()=>{ 
  //   const response=await fetch(``, { method: 'GET' })
  //   let t= await response.json();
  //   if(t){
  //     validuser();
  //   }
  //   else{alert("no user found for mail")};
  // }


  
 
  
  if(!props.status){
  return (<>
    <div className="Register">
      <form action="" className="formregister" onSubmit={createUser}>
      <h1 style={{fontWeight : 'bold' , textAlign:'center'}} >Register</h1>
      <div className="form-row">
					<label htmlFor="firstName">First Name</label>
					<input type="text" name="firstName" id="firstName" className="input-text" value={user.firstName} onChange={(e) => handleChange(e)}/>
				</div>
        <div className="form-row">
					<label htmlFor="lastName">Last Name</label>
					<input type="text" name="lastName" id="Lastname" className="input-text" value={user.lastName} onChange={(e) => handleChange(e)}/>
				</div>
        <div className="form-row">
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" className="inputEmail" value={user.email} onChange={(e) => handleChange(e)}/>
				</div>
        <div className="form-row">
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" className="inputPassword" value={user.password} onChange={(e) => handleChange(e)}/>
				</div>
       
<div className="container"><button className="btn btn-lg btn-primary btn-block" style={{}} type="submit" onClick={createUser} >Register</button></div>
      
      </form>
    </div>

</>
  )}else{return ( <><div className="container text-center">
     <div className="Register">
      <form action="" className="formregister" onSubmit={getUser}>
      
        <div className="form-row  my-2">
				<h6>Email</h6>
					<input type="email" name="email" id="email" className="inputEmail input-lg" value={user.email} onChange={(e) => handleChange(e)}/>
				</div>
        <div className="form-row my-2 input-lg">
        <h6>Password</h6>
					<input type="password" name="password" id="password" className="inputPassword" value={user.password} onChange={(e) => handleChange(e)}/>
				</div>
       
<div className="container"><button className="btn btn-lg btn-primary btn-block my-2" style={{}} type="submit" onClick={getUser} >Login</button></div>

      </form>
    </div>

</div>

 
   
 </>);
  }
};
