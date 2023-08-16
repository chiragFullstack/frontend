import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <div class="menu-link">
        <Link to={`/Dashboard`} className="menuLink">
          Dashboard
        </Link> 
      </div>
      <div class="menu-link">
        <Link to={`/listOrganization`} className="menuLink">
          Organization Manage
        </Link> 
      </div>
      <div class="menu-link">
        <Link to={`/listDriver`} className="menuLink">
          Driver Manage
        </Link> 
      </div>
      <div class="menu-link">
        <Link to={`/listVehicle`} className="menuLink">
          Vehicle Manage
        </Link> 
      </div>
      <div class="menu-link">
        <Link to={`/logout`} className="menuLink">
          Logout
        </Link> 
      </div>
    </>
  )
}

export default Sidebar