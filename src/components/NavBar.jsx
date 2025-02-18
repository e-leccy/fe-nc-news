import { Link } from "react-router-dom"


function NavBar () {
    return (
        <>
        <ul className="nav">
            <Link to="/">
            <button>Home</button>
            </Link>
            
            <button>Topics</button>
            <button>Profile</button>
        </ul>
        </>
    )
}

export default NavBar