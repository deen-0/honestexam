import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as ROuter
,Link
} from 'react-router-dom'

export default function UserNav() {

let name=useSelector((s)=>s.user.firstName)+"  "+useSelector((s)=>s.user.lastName)

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  
    <ul className="navbar-nav">
    <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/UserUi">Home</Link>
        </li>
        </ul>
    <ul className="navbar-nav">
    <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/UserUi">Hey, {name}</Link>
        </li>
        </ul>
        <Link className="nav-link active" aria-current="page" to="/" >
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button></Link>
      </div>
</nav>
    </>
  )
}
