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
    isVisible: true,
    mode:"",
    favCar:""
  })

  function changeHandler(e){
    
    const {name, value, checked, type} = e.target
    setFormData(prevData => {
      return {
        ...prevData,
        [name] : type === "checkbox" ? checked : value
      }
    })
  }
  function submitHandler(e){
    e.preventDefault();
    //print
    console.log("Finally dataa");
    console.log(formData);
  }
  
  return (
    <div className='flex justify-center'>
      <form onSubmit={submitHandler}>
        <label>F Name</label>
        <input type="text" 
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
        <label>comments</label>
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
        checked={formData.isVisible}
        id='isVisible'
        />
        <br/><br/>
        <label htmlFor='mode'>Mode</label>
        <input type='radio'
        onChange={changeHandler}
        name='mode'
        value="dark"
        id='mode'
        checked={formData.mode === "dark"}
        />

        <label htmlFor='mode'>off</label>
        <input type='radio'
        onChange={changeHandler}
        name='mode'
        value="light"
        id='mode'
        checked={formData.mode === "light"}
        />
        <br/><br/>

        {/* Drop down */}
        <label htmlFor='favCar'>Your Fav Car??</label>
        <select
        onChange={changeHandler}
        name='favCar'
        id='favCar'
        value={formData.favCar}>
        <option value="Virtus GT">Virtus GT</option>
        <option value="Polo GT">Polo GT</option>   
        <option value="Supraaa">Supraaa</option>   
        <option value="Endevour">Endevour</option>          
        </select>
        <br/> <br/>
        <input type='submit' value="submit"/>
      </form>
    </div>
  )
}

export default App