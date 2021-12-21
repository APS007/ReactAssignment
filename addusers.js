import React from 'react'


const AddUser = ({ onAdd }) => {
    const handleOnSubmit = (e) => {
        e.preventDefault()
        onAdd(e.target.name.value, e.target.email.value)
        e.target.name.value = ""
        e.target.email.value = ""
    }
    return (
        <div >
        </div>

    )
}



export default AddUser;