import React, { useState } from 'react'

const Function = () => {
    const [name, setname] = useState("Matthew"); //  const [name] = useState("Matthew"); is also valid

    const affidavit = (e) => {
        setname(e.target.value) //  setname(name = e.target.value)
    }

  return (
    <div>
        <h1>My name is {name}</h1>
        <input type="text" onChange={affidavit} />
    </div>
  )
}

export default Function