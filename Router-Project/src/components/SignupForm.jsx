import React, { useState } from 'react'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmpassword:""
  })
  return (
    <div>
      {/* Student -Instuctor tab */}
      <div>
        <button>Student</button>
        <button>Instuctor</button>
      </div>

      <form>
      <div>
      {/* First anem or last name */}
        <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input type='text' required name='firstname' onChange={chnageHandler}
            placeholder='Enter first name'
            value={formData.firstname} />
        </label>

        <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input type='text' required name='lastname' onChange={chnageHandler}
            placeholder='Enter last name'
            value={formData.lastname} />
        </label>
      </div>
      </form>
    </div>
  )
}

export default SignupForm