import React, { Component, useState, useEffect } from 'react'

function Button(props) {
    const [ count, setCount ]  = useState(0)

    function handleStatusChange(status) {
        setCount(status.count);
    }

    useEffect(() => {
        return () => {
        };
    });
    
    return (
      <div>
        { count }
        <button onClick={() => setCount(count + 1)}>选我～选我～选我</button>
      </div>
    )
}

export default Button
