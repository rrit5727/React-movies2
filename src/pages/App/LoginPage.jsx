import React from "react";
import { useState } from "react";



const LoginPage = ({updateUser}) => {
    
  const [userName, setUserName] = useState('');

  function handleAddUser(evt) {
    evt.preventDefault();
    updateUser(userName);
    setUserName('');
  }


    return(
      <>
      <h2>New User</h2>
        <form onSubmit={handleAddUser}>
          <label for="">UserName</label>
          <input value={userName} onChange={(evt) => setUserName(evt.target.value)} type="text"/>
          <button type="submit">Submit</button>
        </form>
      </>
    )
}

export default LoginPage