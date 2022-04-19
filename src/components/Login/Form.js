import React from 'react'
import Button from '../UI/Button'

// Phone Input Component
const PhoneInput = ({loginSubmit})=>{
    return (
        <FormWrapper>
            <form id="loginForm" onSubmit={loginSubmit}>
                <div className='flex flex-col items-left gap-y-2'>
                    <label className='text-sm'>Phone Number</label>
                    <input className="p-1 text-sm text-black outline-none" type="text" placeholder="Phone Number" name="phone" autoComplete='false' />
                </div>

                <Button type="submit" id="signInButton" text="Sign In" />
            </form>
        </FormWrapper>
    )
}
const OtpInput = ({otpSubmit})=>{
    return (
        <FormWrapper>
            <form id="otpForm" onSubmit={otpSubmit}>
                <div className='flex flex-col items-left gap-y-2'>
                    <label className='text-sm'>Enter OTP</label>
                    <input className="p-1 text-sm text-black outline-none" type="number" placeholder='One Time Password' name="otp" autoComplete='false' />
                </div>
                <Button type="submit" id="verifyOtpButton" text="Verify OTP" />
            </form>
        </FormWrapper>
    )
}

const FormWrapper = (props) =>{
    return (
    <div className='bg-[#333] px-5 py-10 w-full text-white my-5'>{props.children}</div>
)
}

const Form = ({loginSubmit , otpSubmit , viewOtpForm=true}) => {
  return (
    <div className='basis-3/4 flex flex-col pt-10 landscape:basis-full'>
        <h1 className='text-center font-semibold text-xl'>Sign In</h1>
        <p className='text-center mt-3'>Sign in using your mobile number</p>
        {!viewOtpForm ? <PhoneInput loginSubmit={loginSubmit}/> :
        <OtpInput otpSubmit={otpSubmit} />}
        
    </div>
  )
}

export default Form