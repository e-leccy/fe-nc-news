import { useContext, useState } from "react";
import { UserAccount } from "./UserAccount";

function UserLoginForm ({users}) {

    const [selectedUser, setSelectedUser] = useState({username: ""})
    const { loggedInUser, setLoggedInUser} = useContext(UserAccount)
    const [searching, setSearching] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)

    function handleChange(event) {
        const value = event.target.value
        setSelectedUser({username: value })
        
    }

    function handleSubmit(event){
        event.preventDefault()
        setSearching(true)
        const userExist = users.some(user => user.username === selectedUser.username)
        
        
        if (userExist) {
            setLoggedInUser(selectedUser.username)            
            setSearching(false)
            setLoggedIn(true)
            setErrorMsg(false)
            
        } else {
            setSearching(false)
            setErrorMsg(true)
        }
    }

    if (searching) {
        return <p>Searching...</p>
    }

return (
<>
    <form>
        <label htmlFor="username">Username:</label>
        <input type="text" placeholder='username' id="username" name="username" required
        value={selectedUser.username} onChange={handleChange} />

    <button type="submit" onClick={handleSubmit} >Submit</button>
    </form>

    {errorMsg ? (<p>Something went wrong!</p>) : null}
    {loggedIn ? (<p>Logged in as {selectedUser.username}</p>) : null}
</>
)
}

export default UserLoginForm