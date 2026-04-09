import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../Redux'

function UserContainer({ userData, fetchUsers }) {
  // this is step 26.
  useEffect(() => {
    fetchUsers()
  }, [])
  return userData.loading ? (
    <div>Loading</div>
  ) : userData.error ? (
    <>{userData.error}</>
  ) : (
    <div>
      <h2>User List</h2>
      {userData &&
        userData.users &&
        userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  )
}

// this is step 25 ; check step 26 above in this file only.
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
