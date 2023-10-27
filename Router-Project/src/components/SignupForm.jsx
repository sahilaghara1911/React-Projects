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

  const [showPassword, setShowPassword] = useState(false)
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

    setIsLoggedIn(true);
    toast.success("Account Created");
    
    console.log(formData);
    navigate("/dashboard")
  }
  return (
    <div>
      {/* Student -Instuctor tab */}
      <div>
        <button>Student</button>
        <button>Instuctor</button>
      </div>

      <form onSubmit={submitHandler}>
      <div>
      {/* First anem or last name */}
        <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input type='text' required name='firstname' onChange={changeHandler}
            placeholder='Enter first name'
            value={formData.firstname} />
        </label>

        <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input type='text' required name='lastname' onChange={changeHandler}
            placeholder='Enter last name'
            value={formData.lastname} />
        </label>
      </div>
        {/* Email add */}
        <label>
            <p>
              Email Address<sup>*</sup>
            </p>
            <input type='email' required name='email' onChange={changeHandler}
            placeholder='Enter Email Address'
            value={formData.email} />
        </label>
        {/* createpassword and confirm password */}
        <div>
        <label>
            <p>
              Create Password<sup>*</sup>
            </p>
            <input type={showPassword ? ("text") : ("password")} required name='password'
            onChange={changeHandler}
            placeholder='Enter the passowrd'
            value={formData.password} />
            <span onClick={() => setShowPassword((prev) => !prev) }>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye />)}
            </span>
        </label>

        <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>
            <input type={showPassword ? ("text") : ("password")} required name='confirmpassword'
            onChange={changeHandler}
            placeholder='Enter the confirm passowrd'
            value={formData.confirmpassword} />
            <span onClick={() => {setShowPassword((prev) => {!prev})}}>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye />)}
                </span>
        </label>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  )
}

export default SignupForm