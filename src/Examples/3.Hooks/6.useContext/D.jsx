import React, { useContext } from 'react' // Last step
import { JobContext, UserContext } from './1.UseContextApp'
import E from './E'
function D() {
  const user = useContext(UserContext) // Last step
  const job = useContext(JobContext) //// Last step
  return (
    <div>
      With hook - {user} : {job}
      <E />
    </div>
  )
}

export default D
