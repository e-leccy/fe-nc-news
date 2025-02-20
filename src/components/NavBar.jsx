import { useContext } from "react";
import { UserAccount } from "./UserAccount";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const { loggedInUser } = useContext(UserAccount);
  const navigate = useNavigate();

  return (
    <>
      <ul className="nav">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>

        <button
          onClick={() => {
            navigate("/topics");
          }}
        >
          Topics
        </button>

        {!loggedInUser && (
          <button
            onClick={() => {
              navigate("/users");
            }}
          >
            Login
          </button>
        )}

        {loggedInUser && (
          <button
            onClick={() => {
              navigate("/users");
            }}
          >
            Users
          </button>
        )}

        {loggedInUser && (
          <button
            onClick={() => {
              navigate(`/users/${loggedInUser}`);
            }}
          >
            {loggedInUser}
          </button>
        )}
      </ul>
    </>
  );
}

export default NavBar;
