import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const SignupForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmpassword:""
  })

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [accountType, setAccountType] = useState("student");
  function changeHandler(e){
    setFormData( (prevData) => (
        {
            ...prevData,
            [e.target.name] : e.target.value,
        }
    ))
}
  function submitHandler(e){
    e.preventDefault();
    if(formData.password != formData.confirmpassword) {
      toast.error("Password  do not match");
      return
    }
    const finaldata = {
      ...formData,
      accountType
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    
    console.log(finaldata);
    navigate("/dashboard")
  }
  return (
    <div>
      {/* Student -Instuctor tab */}
      <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max overflow-hidden'>
        <button 
        className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={() => setAccountType("student")}>Student</button>
        <button
        className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={() => setAccountType("instructor")}>Instuctor</button>
      </div>

      <form onSubmit={submitHandler} className='flex flex-col gap-y-4 '>
      <div className='flex gap-x-4'>
      {/* First anem or last name */}
        <label className='w-full'>
            <p className='text-white text-[0.875rem] mb-1'>
              First Name<sup className='text-pink-200'>*</sup>
            </p>
            <input type='text' required name='firstname' onChange={changeHandler}
            placeholder='Enter first name'
            value={formData.firstname} 
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>

        <label className='w-full'>
            <p className='text-white text-[0.875rem] mb-1'>
              Last Name<sup className='text-pink-200'>*</sup>
            </p>
            <input type='text' required name='lastname' onChange={changeHandler}
            placeholder='Enter last name'
            value={formData.lastname} 
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>
      </div>
        {/* Email add */}
        <label className='w-full'>
            <p className='text-white text-[0.875rem] mb-1'>
              Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input type='email' required name='email' onChange={changeHandler}
            placeholder='Enter Email Address'
            value={formData.email} 
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>
        {/* createpassword and confirm password */}
        <div className='flex gap-x-4 w-full '>
        <label className='relative w-full'>
            <p className='text-white text-[0.875rem] mb-1'>
              Create Password<sup className='text-pink-200'>*</sup>
            </p>
            <input type={showPassword ? ("text") : ("password")} required name='password'
            onChange={changeHandler}
            placeholder='Enter passowrd'
            value={formData.password} 
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            <span onClick={() => setShowPassword((prev) => !prev) }
            className='absolute right-3 top-[38px] cursor-pointer'>
                    {showPassword ? 
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
        </label>

        <label className='relative w-full'>
            <p className='text-white text-[0.875rem] mb-1'>
              Confirm Password<sup className='text-pink-200'>*</sup>
            </p>
            <input type={showPassword1 ? ("text") : ("password")} required name='confirmpassword'
            onChange={changeHandler}
            placeholder='Confirm passowrd'
            value={formData.confirmpassword} 
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
            <span onClick={() => setShowPassword1((prev) => !prev) }
            className='absolute right-3 top-[38px] cursor-pointer'>
                    {showPassword1 ? 
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
            </span>
        </label>
        </div>
        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 w-full'>Create Account</button>
      </form>
    </div>
  )
}

export default SignupForm