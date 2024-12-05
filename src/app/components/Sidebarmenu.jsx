import React from 'react'
import './sidebarmenu.css'

export default function Sidebarmenu() {
  return (
    <div >
       <div className="menulist">
       <aside className="sidebar">
        <div className="logo"> <img src='/sidebarlogo.png' alt="logo"/> </div>
       <div className="list">
      <div className="nav">

      <nav className="menu">
         
         <li>  <img src="/account.png" alt="account.png"/></li>
         <li>  <img src="/contacts.png" alt="contacts.png"/></li>
         <li>  <img src="/star.png" alt="star.png"/></li>
         <li>  <img src="/sitting.png" alt="sitting.png"/></li>
      
     </nav>
      </div>

      <div className="logout">
        <img src="/logout.png"/>
      </div>
       </div>
      </aside>
       </div>
    </div>
  )
}
