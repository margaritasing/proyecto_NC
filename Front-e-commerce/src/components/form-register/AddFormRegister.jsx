import "./AddFormRegister.css";
import Swal from "sweetalert2";

import axios from "axios";


function AddFormRegister() {

  /* SignUP start */
  async function NewUser(event){
    
    event.preventDefault()

  

    const newUser = {    
                          username:event.target[0].value,
                          lastname:event.target[1].value,
                          email:event.target[2].value,
                          password:event.target[3].value                                                
                        }  
            console.log(newUser)
 
   await axios.post("http://localhost:5000/api/auth/register",{newUser} )
   .then(response=> console.log(response)).catch(err => {
    console.log(err.response.status);
    console.log(err.response.data);
});
  
   
   /* displayMessages(response.data) */
 
/*  function displayMessages(data){
  if(data.success==="falseVAL"){
    let errorDetalles = data.response.error.details 
    console.log(errorDetalles)    
    errorDetalles.map(
      error =>     
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response   
      })
      )
  }else if(data.success===true){
    Swal.fire(
      'Good job!',
      'Registered user with SingIn!, <br /> We have sent an e-mail to verify your e-mail address',
      'success'
    )
    console.log(data)
  }
 } */
  }

  /* SIgn UP End */
  return (
    <div className="afl-container">
      <form className="form-login-container" onSubmit={NewUser}>
        <div className="full-width">
          <h2 className="form-title text-align-center">Register</h2>
          <h3 className="form-body text-align-center">
            Please register using account detail bellow.
          </h3>
        </div>
        <div className="full-width form-inputs-container">
          <label>
            <input
              className="form-input"
              name="username"
              id="username"
              type="text"
              placeholder="Enter your first name"
            />
          </label>
          <label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"           
              placeholder="Enter your email"
            />
          </label>
        
          <label>
            <input className="form-input" type="password" placeholder="Password" />
          </label>
       
        </div>
        <div className="full-width">
          <button type="submit" className="form-login__button--send">Create Account</button>
        </div>
        <div className="full-width">
          <h3 className="form-body text-align-center">
            You have an Account?{" "}
            <a className="form-body" href="/myaccount">
              Log in
            </a>
          </h3>
        </div>
      </form>
    </div>
  );
}
export default AddFormRegister;
