import React from 'react'
import useInput from './2.useInput'

const UserFormCustomHook = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const submitHandeler = (e) => {
    e.preventDefault() // to prevent page from refreshing.
    alert(`Hello ${firstName} ${lastName} Happy Coding`)
    resetFirstName()
    resetLastName()
  }
  return (
    <div>
      <form onSubmit={submitHandeler}>
        <div>
          <label>First Name</label>
          <input {...bindFirstName} type="text" />
        </div>
        <div>
          <label>Last Name</label>
          <input {...bindLastName} type="text" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UserFormCustomHook
