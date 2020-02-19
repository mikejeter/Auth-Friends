import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friend = ({id, name, age, email}) => {

    
    return (
        <div className="card" key={id}>
           <h2>Name: {name}</h2>
           <h3>Age: {age}</h3>
           <h3>Email: {email}</h3>
        </div>
    )
}

export default Friend;