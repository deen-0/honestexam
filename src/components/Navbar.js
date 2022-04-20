import React  from 'react';
import {Link} from 'react-router-dom';



export default function Navbar(props) {
 
  
  
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  
         <img src={require('./logo.png') } alt="" width="100" height="100"></img>

    <Link className="navbar-brand" to="/">Honest Exams</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/About">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/ContactUs">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/UserUi">UserUi</Link>
        </li>
       
        
      </ul>
      <form className="d-flex">
       
      <button className="btn btn-success mx-2" style={{width: "150px"}} onClick={props.Changex} >{props.btntitle}</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
