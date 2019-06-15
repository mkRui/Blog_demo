import React, { Component, useState, useEffect } from 'react'



function Button() {
    const [ count, setCount ]  = useState(0)

    useEffect(() => {
      console.log(1)
      document.title = `title as ${ count }`
    })
    
    return (
      <div>
        { count }
        <button onClick={() => setCount(count + 1)}>选我～选我～选我</button>
      </div>
    )
}

export default Button
