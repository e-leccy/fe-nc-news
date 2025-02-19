import { useEffect, useState } from "react"
import { getUsers } from "../utils/api"
import UserCard from "./UserCard"

function Users () {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getUsers().then((result) => {
            setUsers(result)
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <>
        <ul>
        {users.map((user) => {
            return <li key={user.username}>
                <UserCard user={user} />
            </li>
        })}
        </ul>
        </>
    )
}

export default Users