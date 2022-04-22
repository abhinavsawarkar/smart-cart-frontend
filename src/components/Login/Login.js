import React , {useEffect , useState} from 'react'
import Form from './Form'
import {getAuth , RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import AppWrapper from '../UI/AppWrapper';


const Login = () => {
  // const [userPhoneNumber , setUserPhoneNumber] = useState();

  const auth = getAuth()
  useEffect(()=>{
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container' , {
      'size' : 'invisible',
      'callback' : (response)=>{
        console.log("Captcha Resolved")
      },
      'defaultCountry' : "IN"
    } , auth)
  },[auth])

  // View OTP Form State
  const [viewOtpForm , setViewOtpForm] = useState(false)

  // Login Submit Handler
  const loginSubmit = (e)=>{
    e.preventDefault();
    let phoneNumber = "+91" + e.target.phone.value;
    const appVerifier = window.recaptchaVerifier

    signInWithPhoneNumber(auth , phoneNumber , appVerifier).then(confirmationResult =>{
      // SMS Sent , Prompt User to type the code from the message then sign in the user with confirmationResult.confirm(code)
      console.log("OTP Sent");
      setViewOtpForm(true)
      window.confirmationResult = confirmationResult;
    }).catch(error=>{
      // Error SMS not Sent
      alert(error.message)
    })
  }

  // otpSubmit Handler
  const otpSubmit = (e)=>{
    e.preventDefault();
    let otpNumber = e.target.otp.value
    window.confirmationResult.confirm(otpNumber)
    .then(confirmationResult=>{
      console.log("Success")
      window.open("/cart" , "_self")
      // setUserPhoneNumber(confirmationResult.user.phoneNumber)
      console.log(confirmationResult.user.phoneNumber)
    }).catch(error=>{
      alert(error.message)
    })
  }

  // Handling User
  const [user , setUser] = useState([]);
  auth.onAuthStateChanged(user=>{
    if(user){
      setUser(user)
    }
  })

  console.log(user)

  // const API_KEY = "rzp_test_dFOoUBRUEtekR3"
  // const API_SECRET = "5qDs8PpurcM6FbJBdEfFaBNw"

  return (
    <AppWrapper>
      <div className='flex flex-col mx-5 py-4 h-screen sm:flex-row sm:items-center sm:justify-center' >
        <div id="recaptcha-container"></div>
        <div className='flex justify-center items-center space-x-5 basis-1/4 landscape:basis-full '>
          <div>
            <img className='max-w-full' src='./smart-cart 1.png' alt=""/>
          </div>
          <p className='text-xl font-bold leading-tight'>Smart Cart <br/>Shopping</p>
        </div>
        <Form loginSubmit={loginSubmit} otpSubmit={otpSubmit} viewOtpForm={viewOtpForm} />
      </div>
    </AppWrapper>
  )
}

export default Login