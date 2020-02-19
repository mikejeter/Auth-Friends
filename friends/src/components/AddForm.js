import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddForm = () => {
    const [ friend, setFriend ] = useState ({
        id: Date.now(),
        name: "",
        age: "",
        email: "",
    })

    const handleChange = event => {
        setFriend({...friend, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        
        axiosWithAuth()
            .post("/friends", friend)
            .then(res => {
                console.log('new friend', res)
            })
            .catch(err => {
                console.log(err);
            })
            setFriend({
                name: "",
                age: "",
                email: ""
            })
    }


    return (
        <div className="add-form" >
           <form className="add" onSubmit={handleSubmit}>
            <input 
                className="name"
                placeholder="Friend's Name"
                type="text"
                name="name"
                value={friend.name}
                onChange={handleChange}
            /> 
            <input 
                className="age"
                placeholder="Friend's Age"
                type="number"
                name="age"
                value={friend.age}
                onChange={handleChange}
            /> 
            <input 
                className="email"
                placeholder="Friends Email"
                type="text"
                name="email"
                value={friend.email}
                onChange={handleChange}
            /> 
            <button type="submit" className="add-friend" >Add Friend</button>
            </form>
        </div>
    )
}

export default AddForm;