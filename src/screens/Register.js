import React from 'react'

function Register() {
    function submitForm() {
        console.log("Hello World")
    }
  return (
    <div>
        <input type='name' placeholder='write ur name' ></input>
        <button onClick={submitForm} >Submit</button>
    </div>
  )
}

export default Register