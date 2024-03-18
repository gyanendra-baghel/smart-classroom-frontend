import React from 'react'
import "./loginAndsignup.css"
function signup() {
  
  return (
    <>
    <div className='login'>
      <form action="">
        <h1>Signup</h1>
        <label htmlFor="">Full-name</label>
        <input type="text" />
        <label htmlFor="">email-id</label>
        <input type="email" />
        <label htmlFor="">username</label>
        <input type="text" />
        <label htmlFor="">Password</label>
        <input type="password" />
        <button className='button'>submit</button>
      </form>
    </div>
    </>
  )
}

export default signup