import React, { useState } from 'react'
import {AiOutlineEyeInvisible, AiOutlineEye} from 'react-icons/ai'

const LoginForm = () => {
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
    return (
    <div>
        <form>
            <label>
                <p>Email Address<sup>*</sup></p>
                <input type='email'
                required
                value={formData.email}
                name='email'
                onChange={changeHandler}
                placeholder='Enter email id' />
            </label>
            <label>
                <p>Password<sup>*</sup></p>
                <input type={showPassword ? ("text") : ("password")}
                required
                name='password'
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter the password' />
                <span onClick={() => {
                    setShowPassword((prev) => {
                        !prev
                    })
                }}>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye />)}
                </span>

                <Link to="#">
                    <p>
                        Forgot Password
                    </p>
                </Link>
            </label>

            <button>
                Sign In
            </button>
        </form>
    </div>
    )
}

export default LoginForm