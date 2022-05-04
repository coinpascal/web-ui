import {MdLogin,MdAlternateEmail} from "react-icons/md"
import {FcInfo} from "react-icons/fc"
import {FiArrowRight} from "react-icons/fi"
import { useState,Fragment } from 'react';
import axios from '../libs/axios';
import { Dialog, Transition } from '@headlessui/react'
import Link from "next/link";
import { CgPassword } from "react-icons/cg";

function CreateAccountForm() {
  const [registrationError, setregistrationError] = useState('')
  const [registrationErrorDialogisOpen, setregistrationErrorDialogIsOpen] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [userEmailError, setUserEmailError] = useState(null)
  const [userOTP, setUserOTP] = useState('')
  const [userOTPError, setUserOTPError] = useState(null)

    return(
      <>
        <div className="p-10 relative">
          <div className='text-2xl font-bold mb-2 text-left'><span className='font-normal text-gray-500'>Create Account</span></div>
          {
            currentStep === 'VerifyMail' ? <>
            <Formik
            initialValues= {{
              email: '',
            }}
            onSubmit= {(values) => {
              setCurrentStep('loading')             
                    var config = {
                        method: 'post',
                        url: '/auth/register/'+currentStep,
                        headers: { 
                          'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data :JSON.stringify({
                            "email": values.email,
                          })
                      };
                    axios(config)
                        .then(res  => {
                          console.log(res);
                          if (res.status === 200){
                            if(res.data.sentOTP === true){
                              setUserEmail(res.data.travelto)
                              setCurrentStep('verify2FaCode')
                            }else{
                              setregistrationErrorDialogIsOpen(true)
                              setregistrationError('Please refresh the page and try again.')
                              setCurrentStep('VerifyMail')
                            }
                          }
                        })
                        .catch(error => {
                            if (error) {
                              setCurrentStep('VerifyMail')
                            }
                        })
            }}
            validationSchema={Yup.object({
              email: Yup.string().email('Invalid Email').required('Required'),
            })}
            >
              {({ errors, touched, isValidating }) => (
                <>
                <div className='text-md mb-4 text-gray-400'>Please enter your email to begin the process.</div>
                <Form className="bg-white shadow-2xl gap-3 shadow-gray-200 flex flex-col p-8 px-6 border rounded-lg min-w-sm max-w-sm">
                  <div className='flex flex-col group relative'>
                      {errors.email && touched.email && <div className='bg-red-200 absolute right-2 bottom-2 text-red-500 shadow-lg shadow-red-100 w-[fit-content] px-1 rounded-md text-sm'>{errors.email}</div>}
                      <label htmlFor="identity" className='text-gray-500 text-sm group-focus-within:text-gray-800 transition-all'><MdAlternateEmail className='inline'/> Email Address</label>
                      <Field type="email" placeholder='email@example.com' className='border focus-within:outline-0 focus-within:shadow-md shadow-gray-100 px-3 h-9 rounded-lg' name="email" />
                  </div>
                  <button type="submit" className='bg-pink-500 w-full shadow-lg flex flex-row items-center gap-2 justify-center shadow-pink-300 text-white rounded-lg p-2 active:shadow transition-all group' >
                    <span className='duration-200 group-hover:pl-2'>Get Started</span><FiArrowRight className='duration-200 group-hover:ml-2 group-active:ml-10 group-active:opacity-0'/></button>            
                </Form>
                <div className='text-sm my-4 text-gray-400 text-center'><FcInfo className='inline text-lg'/> A <b>code</b> will be sent your email, for verification.</div>
                </>
              )}  
            </Formik>
            </> :
            currentStep === 'verify2FaCode' ? <> 
            <Formik
            initialValues= {{
              verificationcode: '',
            }}
            onSubmit= {(values) => {
                    setCurrentStep('loading')
                    var config = {
                        method: 'post',
                        url: '/auth/register/'+currentStep,
                        headers: { 
                          'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data :JSON.stringify({
                            "email": userEmail,
                            "verificationcode":values.verificationcode
                          })
                      };
                    axios(config)
                        .then(res  => {
                            if(res.status === 200){
                              if(res.data.access_token){
                                localStorage.setItem('token',res.data.access_token)
                                setCurrentStep('done')
                              }else{
                                setregistrationErrorDialogIsOpen(true)
                                setregistrationError('Please refresh the page and try again.')
                                setCurrentStep('verify2FaCode')
                              }
                            }
                        })
                        .catch(error => {
                            if (error) {
                              console.log(error);
                              setCurrentStep('verify2FaCode')
                            }
                        })
            }}
            validationSchema={Yup.object({
              verificationcode: Yup.number().positive().integer('Must be Numerical').required('Required').max(999999,'Code Invalid').min(100000,'Code Invalid'),
            })}
            >
              {({ errors, touched, isValidating }) => (
                <>
                <div className='text-md mb-4 text-gray-400'>Please enter the verification code to finish the process.</div>
                <Form className="bg-white shadow-2xl gap-3 shadow-gray-200 flex flex-col p-8 px-6 border rounded-lg min-w-sm max-w-sm">
                  <div className='flex flex-col group relative'>
                      {errors.verificationcode && touched.verificationcode && <div className='bg-red-200 absolute right-2 bottom-2 text-red-500 shadow-lg shadow-red-100 w-[fit-content] px-1 rounded-md text-sm'>{errors.verificationcode}</div>}
                      <label htmlFor="identity" className='text-gray-500 text-sm group-focus-within:text-gray-800 transition-all'><CgPassword className='inline'/> Verification Code</label>
                      <Field type="number" placeholder='000 000' className='border focus-within:outline-0 focus-within:shadow-md shadow-gray-100 px-3 h-9 rounded-lg' name="verificationcode" />
                  </div>
                  <button type="submit" className='bg-pink-500 w-full shadow-lg flex flex-row items-center gap-2 justify-center shadow-pink-300 text-white rounded-lg p-2 active:shadow transition-all group' >
                    <span className='duration-200 group-hover:pl-2'>Next</span><FiArrowRight className='duration-200 group-hover:ml-2 group-active:ml-10 group-active:opacity-0'/></button>            
                </Form>
                </>
              )}  
            </Formik>
            </>
            : currentStep === 'loading' ? <>
              <div className="relative h-40 w-full">
                  <svg className="spinner" viewBox="0 0 50 50">
                    <circle className="path stroke-orange-400" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                  </svg>
              </div>
            </> : <>Something Went wrong, Please try refreshing the page.</>
          }
          <hr className='mt-4 mb-2 mx-8' />
          <div className='text-sm mb-2 text-gray-400 text-center'>Already have a account? Login now.</div>
          <Link href={'login'}><button className='bg-blue-500 shadow-lg w-full shadow-blue-300 text-white rounded-lg p-2 active:shadow transition-all flex flex-row items-center justify-center gap-2'><MdLogin/>Login</button></Link>
        </div>
        <Transition appear show={registrationErrorDialogisOpen} as={Fragment}>
            <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={()=>{
                setregistrationErrorDialogIsOpen(false)
                setTimeout(() => {
                    setregistrationError('')
                }, 500);
            }}
            >
            <div className="min-h-screen px-4 text-center">
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-25" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
                >
                &#8203;
                </span>
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                    <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                    >
                    Something went wrong!
                    </Dialog.Title>
                    <div className="mt-2">
                    <p className="text-sm text-gray-500">
                        {registrationError}
                    </p>
                    </div>

                    <div className="mt-4">
                    <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={()=>{
                            setregistrationErrorDialogIsOpen(false)
                            setTimeout(() => {
                                setregistrationError('')
                            }, 500);
                        }}
                    >
                        ok!
                    </button>
                    </div>
                </div>
                </Transition.Child>
            </div>
            </Dialog>
        </Transition> 
      </>
    )
}

export default CreateAccountForm