import React, { useState } from 'react'
import { faBars,faXmark,faCircleInfo,faChartLine,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Route, Routes} from "react-router-dom";
import Registration from "./features/register/Registration"
import "./App.css"
import Profile from './components/Profile';
import {Login} from './features/login/Login';
import Logout from './features/login/Logout';
import {LoggedInUserDetails} from './features/login/LoggedInUserDetails';

const App = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
    <div id="body-pd" className={showNavbar?"body-pd ":""}>
      <header className={showNavbar?"body-pd header bg-light":"header bg-light"} id="header">
        <div className="header_toggle">
          <FontAwesomeIcon icon={showNavbar?faXmark:faBars} className={showNavbar?'show-sidebar':''} size="xl" onClick={toggleNavbar}/>
        </div>
        <div>
        <p className='lead'>Employee Information Management System    </p>
        </div>
        <Profile />
      </header>
      <div className={`l-navbar ${showNavbar ? 'show-sidebar' : ''}`} id="nav-bar">
        <nav className="nav">
          <div>
            <a href="/" className="nav_logo">
              <FontAwesomeIcon icon={faCircleInfo} className='nav_logo-icon' size='xl'/>
              <span className="nav_logo-name">EIMS</span>
            </a>
            <div className="nav_list">
              <a href="/" className="nav_link active">
                <FontAwesomeIcon icon={faChartLine} className='nav_icon' size='xl' />
                <span className="nav_name">Dashboard</span>
              </a>
            </div>
          </div>
          <a href="/" className="nav_link">
            <FontAwesomeIcon icon={faRightFromBracket} className='nav_icon'/>
            <span className="nav_name">SignOut</span>
          </a>
        </nav>
      </div>
    </div>
    <div className={showNavbar?"body-pd height-100 ":"height-100 "}>
    {/* <h4>Main Components</h4> */}
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Registration />} />
      <Route path='/login' element={<Login />} />
      <Route path='/Logout' element={<Logout />} />
      <Route path='/Profile' element={<LoggedInUserDetails/>} />
    </Routes>
  </div>
  </>
  )
}

export default App