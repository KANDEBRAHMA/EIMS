import React from 'react';
import {LoginButton} from './LoginButton';
export function Login() {
  return (
          <div>
          <form>
          {/* <Grid container spacing={0} justify="center" direction="row" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
          <Grid item>
              <div className='d-grid'>
                  {sessionStorage.getItem("token") == null ? <Button variant="contained" color="primary" type="submit" className="button-block" onClick={(e) => {
                      e.preventDefault();
                      navigate();
                  }}>Sign In Using ms office</Button>: 
                  <div>
                    <p>User Logged In - Go to Profile page</p>
                  </div>}
              </div>
              </Grid>
          </Grid> */}
          {/* <Button variant="contained" color="primary" type="submit" className="button-block" onClick={navigate}>Sign In Using ms office</Button> */}
                  {sessionStorage.getItem("token") == null ? <LoginButton />: 
                  <div>
                    <p>User Logged In - Go to Profile page</p>
            </div>}
        
          </form> 
       </div>
    
  )
}