import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserAccount } from "./UserAccount";

function UserCard({ user }) {
  const { loggedInUser, setLoggedInUser } = useContext(UserAccount);
  function handleClick() {
    if (!loggedInUser) {
      setLoggedInUser(user.username);
    }
  }

  return (
    <div id="user">
      <Link to={`/users/${user.username}`} onClick={handleClick}>
        <h2>{user.username}</h2>
      </Link>
      <img src={user.avatar_url} alt="avatar image" className="profile-pic" />
    </div>
  );
}

export default UserCard;
