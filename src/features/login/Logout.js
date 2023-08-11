import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
function Logout() {

  function clearData() {
    console.log("Logging out");
    sessionStorage.removeItem("Token");
    sessionStorage.removeItem("Name");
    sessionStorage.removeItem("Email");
  }

  useEffect(() => {
    window.location.href = 'http://localhost:8080/sign_out';
    clearData();
  }, [])
  return (
    <div>
        {/* if no token found */}
        {sessionStorage.getItem("token") == null ?
          <div>
            <p>Cannot Log Out. No User Found to Log out</p>
          </div> :
          <div>
            <p>You have successfully logged out</p>
          </div>
        }
        {/* if token found */}
         <button type="button" href="/" color="primary">
                Login Again
        </button>
        </div>

  )
}

export default Logout;