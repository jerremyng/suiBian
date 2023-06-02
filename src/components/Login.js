import { useState } from 'react';
import { signInWithRedirect, GoogleAuthProvider, fetchSignInMethodsForEmail} from "firebase/auth";
import { fireBaseAuth } from '../firebase.js';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  
    const [email, setEmail] = useState('')

    //main code
    return (
      <div className='auth-form-container'>  
      <h4>Enter your email!</h4>
      {exist ? <PasswordForm/> :<EmailForm/>}
  
      <br></br>
      <div>or</div>
      <br></br>
      <GoogleLoginButton/>
      </div>
    )
  }


// email components
function EmailForm() {
  const [email, setEmail] = useState('')
  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const checkEmail = (e) => {
    e.preventDefault()

    fetchSignInMethodsForEmail(fireBaseAuth, email)
    .then(SignInMethods => {
      if (SignInMethods.length) {
        //email exist
        console.log("user is here")
      } else {
        console.log("no such user")
      }}
    )
  }

  return (
    <form onSubmit={checkEmail}>
      <input
        value={email} 
        onChange={handleEmailChange} 
        type='email' 
        placeholder='Email'></input>
    <button type='submit'className='submitButton'>Continue</button>
  </form>
  )
}

function PasswordForm() {
  const [password, setPassword] = useState('')
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const checkPassword = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={checkPassword}>
    <input
      value={password} 
      onChange={handlePasswordChange} 
      type='password' 
      placeholder='Password' />
  <button type='submit'className='submitButton'>Continue</button>
</form>
  )
}

function GoogleLoginButton() {

  const navigate = useNavigate();

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(fireBaseAuth,provider)
    .then((result) => {
      var user = result.user;
      navigate('/home')
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.write(errorCode + errorMessage)
    })
  })
  }

  return (
    <>
    <div id='providers'>
    <button 
      onClick={googleLogin}
      className='googleLogin'>Continue with Google</button>
  </div>
  </>
  )
}