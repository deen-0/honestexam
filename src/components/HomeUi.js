import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";
  import Navbar from './Navbar';
import Register from './Register';
import { useState } from 'react';
import HomeIntro from './HomeIntro';
import About from './About';
import ContactUs from './ContactUs';

export default function HomeUi() {
    const [x,setx]=useState(true);
const [btntitle,setbtntitle]=useState("Register");
const 
Changex =(e)=>{
  e.preventDefault();
  let val=x;
  if(val){setx(false); setbtntitle("Login");}
  else {setx(true); setbtntitle("Register");}
}
  return (
    <>

    {/* <Router>  */}
    <Navbar x={x} Changex={Changex} btntitle={btntitle}/>
       <Routes>
<Route exact path="/" element={  <div className="row">
             <div className="column left">
                <HomeIntro/>
                 </div>


                <div className="column right"> 
             <Register status={x}/>
            </div>
       
         </div>}></Route>
<Route exact path="/About" element={<About/>}></Route>
<Route exact path="/ContactUs" element={<ContactUs/>}></Route>

</Routes>

   
    
    
    </>

  )
}


