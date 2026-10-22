import axios from "axios"
import { useEffect, useState } from "react"

export default function List()
{
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/users')
                setUsers(res.data)
                console.log(res.data)
            }
            catch (error) {
                console.error("Error fetching data: ", error.message)
            }
            finally {
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])
    if (loading) return(<p>Loading...</p>)

    return(
        <ul>
            {users.map(user => {
                <li key={user.id}>{user.name}</li>
            })}
        </ul>
    )
}