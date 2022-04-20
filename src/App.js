import './App.css';
import React from "react";

import {
  BrowserRouter as AppRouter,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Register from './components/Register';
import "./App.css"
import { useState } from 'react';
import HomeUi from './components/HomeUi';
import UserUi from './components/UserUi';
import TestUI from './components/TestUI';
import GiveTest from "./components/GiveTest";
import UserNav from './components/UserNav';
import InstructionUi from "./components/InstructionUi"



function App() {


  return ( <>
  <AppRouter>
    <Routes>
<Route exact path="*" element={<HomeUi/>}></Route>
<Route exact path="/UserUi/*" element={<UserUi/>}></Route>
<Route exact path="UserUi/GiveTest/Instructions" element={<InstructionUi/>}></Route>
<Route exact path="UserUi/GiveTest/Instructions/TestUi" element={<TestUI/>}></Route>
</Routes>
    </AppRouter>
  </>
  );
}

export default App;



