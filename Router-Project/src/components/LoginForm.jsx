import React, { useState } from 'react'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState( {
        email :"",
        password : ""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(e){
        setFormData( (prevData) => (
            {
                ...prevData,
                [e.target.name] : e.target.value,
            }
        ))
    }
    function submitHandler(e) {
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in")
        navigate("/dashboard")
        console.log(formData);
    }
    return (
    <div>
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-white text-[0.875rem] mb-1'>Email Address
                <sup className='text-pink-200'>*</sup></p>
                <input type='email'
                required
                value={formData.email}
                name='email'
                onChange={changeHandler}
                placeholder='Enter email id'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
            </label>
            <label  className='w-full relative'>
                <p className='text-white text-[0.875rem] mb-1'>Password<sup className='text-pink-200'>*</sup></p>
                <input type={showPassword ? ("text") : ("password")}
                required
                name='password'
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter the password'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' />
                <span onClick={() => setShowPassword((prev) => !prev) } 
                className='absolute right-3 top-[38px] cursor-pointer'>
                    {showPassword ? 
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>

                <Link to="#">
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                        Forgot Password
                    </p>
                </Link>
            </label>

            <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                Sign In
            </button>
        </form>
    </div>
    )
}

export default LoginForm