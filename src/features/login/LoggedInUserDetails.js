import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function LoggedInUserDetails() {
  const navigate = useNavigate();
  let [token, setToken] = useState(null);
  let [firstName, setFirstName] = useState(null);
  let [lastName, setLastName] = useState(null);
  let [email, setEmail] = useState(null);

  async function fillData(data) {
    if (data !== null) {
      console.log("Fill");
      var token = data['token'];
      var firstName = data['name'].split(" ")[0];
      var lastName = data['name'].split(" ")[1];
      var email = data["email"];
      fillSessionData(firstName, lastName, email, token);
      setToken(data['token']);
      setFirstName(data['name'].split(" ")[0]);
      setLastName(data['name'].split(" ")[1]);
      setEmail(data["email"]);
    }
  }

  function fillSessionData(firstName, lastName, email, token) {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("firstName", firstName);
      sessionStorage.setItem("lastName", lastName);
      sessionStorage.setItem("email", email);
  }
  
  useEffect(() => {
    axios.get("/auth")
      .then((response) => {
        console.log(response);
        fillData(response.data);
      })
      .catch((error) => {
        console.log("User Not logged in");
        fillData(null);
      })
  }, []);
    return (
        <div>
            {token != null ? 
          <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
          </div> : <p>Login Please</p>
        }
        </div>
    )
}