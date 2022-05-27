import  Link from 'next/link';
import {MdAlternateEmail,MdPassword} from "react-icons/md"
import {FiUserPlus} from "react-icons/fi"
import { useState,Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { CgPassword } from 'react-icons/cg';
import { useSession, signIn} from 'next-auth/react';
import Router from 'next/router';

export default function LoginForm(){
    const { data: session } = useSession()
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userEmailError, setUserEmailError] = useState('')
    const [userPasswordError, setUserPasswordError] = useState('')
    const [loginError, setloginError] = useState('')
    const [loginErrorDialogisOpen, setloginErrorDialogIsOpen] = useState(false)
    const firstStepForm = () =>{
        if(userEmail == null){
            setUserEmailError('Invalid Email')
            return
        }
        if(userPassword == null){
            setUserPasswordError('Invalid Email')
            return
        }

        signIn('credentials', { email: userEmail, password: userPassword })
    }
    if(session) {
        Router.push('/dashboard')
      }
    return(
        <>
        <div className="p-10">
          <div className='text-2xl font-bold mb-2 text-left'><span className='font-normal text-gray-500'>Login</span></div>
          <div className='text-md mb-4 text-gray-400'>Welcome back! Please enter your account credentials.</div>
          <form className="bg-white shadow-2xl gap-3 shadow-gray-200 flex flex-col p-8 px-6 border rounded-lg min-w-sm max-w-sm">
                <div className='flex flex-col group relative'>
                    {userEmailError !== null ? <>
                        <div className='bg-red-200 absolute right-2 bottom-2 text-red-500 shadow-lg shadow-red-100 w-[fit-content] px-1 rounded-md text-sm'>{userEmailError}</div>
                    </> : <></>}
                    <label htmlFor="identity" className='text-gray-500 text-sm group-focus-within:text-gray-800 transition-all'><MdAlternateEmail className='inline'/> Email Address</label>
                    <input type="email" value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}} placeholder='email@example.com' className='border focus-within:outline-0 focus-within:shadow-md shadow-gray-100 px-3 h-9 rounded-lg' name="email" />
                </div>
                <div className='flex flex-col group relative'>
                        {userPasswordError !== null ? <div className='bg-red-200 absolute right-2 bottom-2 text-red-500 shadow-lg shadow-red-100 w-[fit-content] px-1 rounded-md text-sm'>{userPasswordError}</div> : <></>}
                        <label htmlFor="password" className='text-gray-500 text-sm group-focus-within:text-gray-800 transition-all'><MdPassword className='inline'/> Password</label>
                        <input value={userPassword} onChange={(e)=>{setUserPassword(e.target.value)}} name="password" type="password" placeholder="******" className='border focus-within:outline-0 focus-within:shadow-md px-3 h-9 rounded-lg' />
                </div>
                <div className="flex gap-1">
                    <button type='button' onClick={(e) => {
                        firstStepForm()
                    }} className='bg-blue-500 shadow-lg w-full shadow-blue-300 text-white rounded-lg py-2 px-3 active:shadow transition-all flex flex-row items-center justify-center gap-2'><CgPassword/>Enter Password</button>
                    {/* <button type='button' onClick={(e) => {firstStepForm('otp')}} className='border w-full border-gray-300 hover:border-gray-400 duration-300 hover:shadow-md shadow-gray-100 rounded-lg py-2 px-3 active:shadow-lg transition-all flex flex-row items-center justify-center gap-2'><FiSend/>Send OTP</button> */}
                </div>
            </form>
          <hr className='mt-4 mb-2 mx-8' />
          <div className='text-sm mb-2 text-gray-400 text-center'>Don't have account? Create one.</div>
          <Link href={'register'}><button className='bg-pink-500 w-full shadow-lg flex flex-row items-center gap-2 justify-center shadow-pink-300 text-white rounded-lg p-2 active:shadow transition-all'><FiUserPlus/>Create Account</button></Link>
        </div>
        <Transition appear show={loginErrorDialogisOpen} as={Fragment}>
            <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={()=>{
                setloginErrorDialogIsOpen(false)
                setTimeout(() => {
                    setloginError('')
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
                        {loginError}
                    </p>
                    </div>

                    <div className="mt-4">
                    <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={()=>{
                            setloginErrorDialogIsOpen(false)
                            setTimeout(() => {
                                setloginError('')
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