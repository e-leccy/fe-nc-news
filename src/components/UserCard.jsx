import { Link } from "react-router-dom"

function UserCard({user}) {
 return (
    <div className="user">
    <Link to={`/users/${user.username}`}>
    <h2>{user.username}</h2>
    </Link>
    <img src={user.avatar_url} alt="avatar image"/>
    </div>
 )
}

export default UserCard