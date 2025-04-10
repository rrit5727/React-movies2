import { useState } from "react"



const LoginPage = ({ updateUser }) => {
    const [username, setUsername] = useState('')

    function handleAddUser(event) {
        event.preventDefault();
        updateUser(username);
        setUsername('')
    }

    return(
        <form action="" onSubmit={handleAddUser}>
            <label htmlFor="">Username</label>
            <input value={username} onChange={(event) => setUsername(event.target.value)} type="text" />
            <button type="submit">Add Username</button>






        </form>
    )
}

export default LoginPage