import React, { useState, useEffect } from 'react'

const Player = (props) => {
    const [message, setMessage] = useState('Hi there, how are you?');

  useEffect(() => {
    console.log('trigger use effect hook');

    setMessage("I'm fine, thanks for asking.");
  })

  return <h1>{message}</h1>
}

export default Player