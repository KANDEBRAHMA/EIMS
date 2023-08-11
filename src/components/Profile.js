import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import Image from "../assets/profile-pic.png"

const Profile = () => {

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href="#"
      ref={ref}
      className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));

  function clearData() {
    console.log("Logging out");
    sessionStorage.removeItem("Token");
    sessionStorage.removeItem("Name");
    sessionStorage.removeItem("Email");
  }

  return (
    <Dropdown className='p-2'>
        <Dropdown.Toggle as={CustomToggle} id="navbarDropdownMenuLink">
            <div className="header_img">
              <img src={Image} alt="Profile" />
            </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className='w-25' drop="left">
            <Dropdown.Item href="/Profile">Profile</Dropdown.Item>
            <Dropdown.Item href="/login">Login</Dropdown.Item>
            <Dropdown.Item href="/register">Register</Dropdown.Item>
            <Dropdown.Item onClick={(e) => {
              console.log("Run");
              if (sessionStorage.getItem("token") != null) {
                clearData();
                window.location.href = 'http://localhost:8080/sign_out';
              }
            }}>Logout</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  )
}

export default Profile