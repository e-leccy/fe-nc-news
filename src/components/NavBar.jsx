import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserAccount } from "./UserAccount"


function NavBar () {
    const {loggedInUser, setLoggedInUser} = useContext(UserAccount)

    return (
        <>
        <ul className="nav">
            <Link to="/">
                <button>Home</button>
            </Link>
            
            <button>Topics</button>

            <Link to="/users">
                <button>Users</button>
            </Link>

            {loggedInUser && (<Link to={`/users/${loggedInUser}`}>
                    <button>{loggedInUser}</button>
                </Link>)}
            
            
        </ul>
        </>
    );
}

export default NavBar