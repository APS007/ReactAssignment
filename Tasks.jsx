import React, { useEffect, useState } from 'react'
import './index.css';
import AddUser from './addusers'
import Infos from './Info'

const Tasks = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        await fetch('http://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => {
                console.log(err)
            })
    }
    const onAdd = async (name, email) => {
        await fetch('http://jsonplaceholder.typicode.com/users', {

            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",

            }
        })
            .then((res) => {
                if (res.status !== 201) {
                    return
                }
                else {
                    return res.json()
                }
            })
            .then((data) => {
                setUsers((users) => [...users, data])
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const onDelete = async (id) => {
        await fetch('http://jsonplaceholder.typicode.com/users/${id}', {
            method: 'DELETE'
        })
            .then((res) => {
                if (res.status !== 200) {
                    return
                }
                else {
                    setUsers(users.filter((user) => {
                        return user.id !== id
                    }))
                }
            })

            .catch((err) => {
                console.log(err)
            })
    }


    console.log(users)
    return (
        <div className="App">
            <br />
            <AddUser onAdd={onAdd} />
            <div>
                {
                    users.map((user) => (
                        <Infos id={user.id} key={user.id} name={user.name} email={user.email} onDelete={onDelete} />
                    ))
                }
            </div>
        </div>
    );
}

export default Tasks;