import React from 'react'
import { useState } from 'react'

const UserForm = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const submitHandeler = (e) => {
    e.preventDefault() // to prevent page from refreshing.
    alert(`Hello ${firstName} ${lastName} Happy Coding`)
  }
  return (
    <div>
      <form onSubmit={submitHandeler}>
        <div>
          <label htmlFor="">First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
          />
        </div>
        <button>Submitttt</button>
      </form>
    </div>
  )
}

export default UserForm

/*
what our customHook to do is to encapsulate below controlled component beahvior for an input element.

value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            That is binding value and onchnge activity.
*/
