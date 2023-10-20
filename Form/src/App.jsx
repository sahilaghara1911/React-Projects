import React, { useState } from 'react'

const App = () => {
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState('')
  // function changeHandler(e){
  //   setFname(e.target.value);
  // }
  // function changeLastname(e){
  //   setLname(e.target.value);
  // }
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    comments: "",
    isVisible: true
  })

  function changeHandler(e){
    setFormData(prevData => {
      return {
        ...prevData,
        [e.target.name] : e.target.value,
      }
    })
  }
  
  return (
    <div className='flex justify-center'>
      <form>
        <label>F Name</label>
        <input type='text' 
        placeholder='first name' 
        onChange={changeHandler} 
        name='firstName'
        value={formData.firstName}
        />

        <br/><br/>
        <label>L Name</label>
        <input type='text' 
        placeholder='last name' 
        onChange={changeHandler} 
        name='lastName'
          value={formData.lastName}
        />
        <br/><br/>
        <textarea placeholder='Commentsssss' 
        onChange={changeHandler}
        name='comments'
        value={formData.comments}
        />
        <br/><br/>
        <label htmlFor='isVisible'>I am visible?</label>
        <input type='checkbox'
        onChange={changeHandler}
        name='isVisible'
        value={formData.isVisible}
        id='isVisible'
        />
      </form>
    </div>
  )
}

export default App