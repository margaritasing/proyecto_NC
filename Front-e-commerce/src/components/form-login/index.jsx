import "./index.css";
import { useStateValue } from '../../reducer/StateProvider';
import { actionType } from '../../reducer/reducer';
import axios from 'axios';






function AddFormLogin() {

  const [{ user }, dispatch] = useStateValue()

  async function loginUser(event) {  
    event.preventDefault() // previene el comportamiento por defecto del botón submit, que es limpiar el formulario
       const userData = {
        email: event.target[0].value,
        password: event.target[1].value,
    }

    await axios.post("https://localhost:5000/api/auth/login",{userData} )
        .then(response => console.log(response)

            /* displayMessages(response.data), */
        )
 /*    function displayMessages(data) {
    
        if (!data.success) {
        alert('The username and/or password is incorrect!')
        }   
        else {
          localStorage.setItem("token", data.response.token)
          alert('Welcome')
          
          }      

        dispatch({
            type: actionType.USER,
            user: data.response
        })
        
    } */
   
}
  return (
    <div className="afl-container">
      <form className="form-login-container" onSubmit={loginUser}>
        <div className="full-width">
          <h2 className="form-title text-align-center">Login</h2>
          <h3 className="form-body text-align-center">Please login using account detail bellow.</h3>
        </div>
        <div className="full-width form-inputs-container">
          <label>
            <input
              className="form-input"
              type="email"
              placeholder="Email Address"
            />
          </label>
          <label>
            <input className="form-input" type="text" placeholder="Password" />
          </label>
        </div>
        <div className="full-width">
          <h3 className="form-body">Forgot your password?</h3>
        </div>
        <div className="full-width">
          <button className="form-login__button--send" type="submit">Sign In</button>
        </div>
        <div className="full-width">
          <h3 className="form-body text-align-center">Don’t have an Account?Create account</h3>
        </div>
      </form>
    </div>
  );
}
export default AddFormLogin;
