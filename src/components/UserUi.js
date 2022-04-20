import React from 'react'
import UserNav from './UserNav'
import "../App.css"
import { useState,useEffect } from 'react'
import MainUi from './MainUi'
import { Route, Routes } from 'react-router-dom'
import GiveTest from "./GiveTest"
import CreateTest from './CreateTest'

export default function UserUi() {
    

    function check(){console.log("i am check")}
    const [color,setColor]=useState({ backgroundColor: "White"});
    function changeColor(){setColor({backgroundColor : "Red"}); console.log("Red")}
    function changeColors(){setColor({backgroundColor : "White"}); console.log("Red")}
  return (<>

<UserNav/>
<Routes>

<Route exact path="/" element={<MainUi/>}></Route>
<Route exact path="/GiveTest" element={<GiveTest/>}></Route>
<Route exact path="/CreateTest" element={<CreateTest/>}></Route>
</Routes>


    </>
  
  )
}
