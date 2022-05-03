import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import {MdLogin,MdPassword} from "react-icons/md"
import {AiOutlineNumber} from "react-icons/ai"
import { useState } from 'react';

function ForgotPasswordForm() {
    const [isPasswordsent, setIsPasswordsent] = useState(false)
    const [OTPverified, setOTPverified] = useState(false)
    const [newPasswordSet, setNewPasswordSet] = useState(false)
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    const sendPaswordresetLink = useFormik({
        initialValues: {
          email: '',
        },
        onSubmit: values => {
          if(validateEmail(values.email)){
            alert(JSON.stringify(values, null, 2));
            setIsPasswordsent(true)
          }
          
        },
      });
    const checkOTP = useFormik({
        initialValues: {
            otp: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          setOTPverified(true)
        },
      });
    const sendNewPassword = useFormik({
        initialValues: {
            password: '',
            newpassword: ''
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          setNewPasswordSet(true)
        },
      });
    return(
        <div className="p-10">
          <div className='text-2xl font-bold mb-2 text-left'><span className='font-normal text-gray-500'>Forgot Password?</span></div>
          <div className='text-md mb-4 text-gray-400'>No issue! We will just send password reset link to your register email address.</div>
            {
                isPasswordsent ? 
                OTPverified ? newPasswordSet ? 
                <>
                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                  <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
                <div className="mt-2">You will be shortly redirected to Login Page.</div>
                </>
                :
                <form onSubmit={sendNewPassword.handleSubmit} className="bg-white shadow-2xl gap-3 shadow-gray-200 flex flex-col p-8 px-6 border rounded-lg min-w-sm max-w-sm">
                    <div className='flex flex-col group'>
                        <label htmlFor="password" className='text-gray-500 text-sm group-focus-within:text-gray-800 transition-all'>One-Time-Pasword you recieved on email</label>
                        <input
                        className='border focus-within:outline-0 focus-within:shadow-md shadow-gray-100 px-3 h-9 rounded-lg'
                        id="password"
                        name="password"
                        type="password"
                        placeholder='******'
                        onChange={sendNewPassword.handleChange}
                        value={sendNewPassword.values.password}
                        />
                    </div>
                    <div className='flex flex-col group'>
                        <label htmlFor="confirmpassword" className='text-gray-500 text-sm group-focus-within:text-gray-800 transition-all'>One-Time-Pasword you recieved on email</label>
                        <input
                        className='border focus-within:outline-0 focus-within:shadow-md shadow-gray-100 px-3 h-9 rounded-lg'
                        id="confirmpassword"
                        name="confirmpassword"
                        type="password"
                        placeholder='******'
                        onChange={sendNewPassword.handleChange}
                        value={sendNewPassword.values.newpassword}
                        />
                    </div>
                    <button type="submit" className='bg-purple-500 shadow-lg shadow-purple-300 text-white rounded-lg p-2 active:shadow transition-all flex flex-row items-center justify-center gap-2'><MdPassword/>Send Password Reset Link</button>
                </form>  
                :
                <form onSubmit={checkOTP.handleSubmit} className="bg-white shadow-2xl gap-3 shadow-gray-200 flex flex-col p-8 px-6 border rounded-lg min-w-sm max-w-sm">
                    <div className='flex flex-col group'>
                        <label htmlFor="otp" className='text-gray-500 text-sm group-focus-within:text-gray-800 transition-all'>One-Time-Pasword you recieved on email</label>
                        <input
                        className='border focus-within:outline-0 focus-within:shadow-md shadow-gray-100 px-3 h-9 rounded-lg'
                        id="otp"
                        name="otp"
                        type="number"
                        placeholder='000000'
                        onChange={checkOTP.handleChange}
                        value={checkOTP.values.otp}
                        />
                    </div>
                    <button type="submit" className='bg-purple-600 shadow-lg shadow-purple-300 text-white rounded-lg p-2 active:shadow transition-all flex flex-row items-center justify-center gap-2'><AiOutlineNumber/>Verify OTP</button>
                </form> 
                :
                <form onSubmit={sendPaswordresetLink.handleSubmit} className="bg-white shadow-2xl gap-3 shadow-gray-200 flex flex-col p-8 px-6 border rounded-lg min-w-sm max-w-sm">
                    <div className='flex flex-col group'>
                        <label htmlFor="email" className='text-gray-500 text-sm group-focus-within:text-gray-800 transition-all'>Register Email address</label>
                        <input
                        className='border focus-within:outline-0 focus-within:shadow-md shadow-gray-100 px-3 h-9 rounded-lg'
                        id="email"
                        name="email"
                        type="email"
                        placeholder='email@example.com'
                        onChange={sendPaswordresetLink.handleChange}
                        value={sendPaswordresetLink.values.email}
                        />
                    </div>
                    <button type="submit" className='bg-purple-500 shadow-lg shadow-purple-300 text-white rounded-lg p-2 active:shadow transition-all flex flex-row items-center justify-center gap-2'><MdPassword/>Send Password Reset Link</button>
                </form>
            }
          <hr className='mt-4 mb-2 mx-8' />
          <div className='text-sm mb-2 text-gray-400 text-center'>Remembered the password? Login now.</div>
          <Link to={'/auth'} className='bg-blue-500 shadow-lg shadow-blue-300 text-white rounded-lg p-2 active:shadow transition-all flex flex-row items-center justify-center gap-2'><MdLogin/>Login</Link>
        </div>
    )
}

export default ForgotPasswordForm