import React from 'react'
import { JobContext, UserContext } from './1.UseContextApp'

function E() {
  return (
    <UserContext.Consumer>
      {(user) => {
        return (
          <JobContext.Consumer>
            {(job) => {
              return (
                <div>
                  User context value is {user} and Job name is {job}
                </div>
              )
            }}
          </JobContext.Consumer>
        )
      }}
    </UserContext.Consumer>
  )
}

export default E
//So much neesting to consume just to values. Here the useContext Hook comes into picture
