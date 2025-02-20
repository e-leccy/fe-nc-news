import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleUser } from "../utils/api";
import { useNavigate } from "react-router-dom";
import UserCard from "./UserCard";

function UserProfile() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { username } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getSingleUser(username).then((result) => {
      setProfile(result);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <UserCard user={profile} />

      <button
        onClick={() => {
          navigate("/users");
        }}
      >
        View All Users
      </button>
    </>
  );
}

export default UserProfile;
