import {useEffect, useState} from "react"
import UserCard from "./UserCard" 
function Users () {

    const [userList, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then((r) => r.json())
            .then((users) => {
                // console.log(users)
                setUsers(users)
            })
    }, [])



    return ( 
        <>
        <h1>Users</h1>
        {userList.map((user) => {
            return (
                <div id="userCardsDiv">
                    <UserCard user={user}/>
                </div>
            )})
            }
        
        </>
    )
}

export default Users