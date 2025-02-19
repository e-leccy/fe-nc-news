import { useContext, useState } from "react";
import { UserAccount } from "./UserAccount";

function UserLoginForm ({users}) {

    const [selectedUser, setSelectedUser] = useState({})
    const { setLoggedInUser, loggedInUser} = useContext(UserAccount)

    function handleChange(event) {
        const value = event.target.value
        
    }

    function handleSubmit(event){
        event.preventDefault()
    }

return (
<>
    <form>
        <label htmlFor="username">Username:</label>
        <input type="text" placeholder='username' id="username" name="username" required
        value={selectedUser.username} onChange={handleChange} />

    <button type="submit" onClick={handleSubmit} >Submit</button>
    </form>
</>
)
}

export default UserLoginForm