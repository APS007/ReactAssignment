import React from 'react'
import './index.css';

const Infos = ({ id, email, name, onDelete }) => {
    const handleDelete = () => {
        onDelete(id)
    }
    return (
        <div className='list'>
            <span>{name}</span>
            <span>{email}</span>
            <span>
                <button>edit</button>
                <button onClick={handleDelete}>delete</button>
            </span>
        </div>

    )
}



export default Infos;