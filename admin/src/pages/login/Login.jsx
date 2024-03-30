import React, { useState } from 'react'

export default function Login() {

  const [ userName , setUserName ] = useState('');
  const [ password , setPassword ] = useState('');  

  const handleClick = (e) => {
    e.preventDefault();
  }

  return (
    <div>
        <input type="text" placeholder='username' onChange={ e=> setUserName(e.target.value)}/>
        <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
        <button onClick={handleClick}>Login</button>
    </div>
  )
}
