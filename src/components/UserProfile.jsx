import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getSingleUser } from "../utils/api"
import UserCard from "./UserCard"

function UserProfile() {
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)

    const {username} = useParams()

    useEffect(() => {
        setLoading(true)
        getSingleUser(username).then((result) => {
            setProfile(result)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    return(
        <>
        <UserCard user={profile} />

        <Link to={"/users"}>
        <button>View All Users</button>
        </Link>
        </>
    )
}

export default UserProfile