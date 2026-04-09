import React from 'react'
import C from './C'

export const UserContext = React.createContext() // Step 1
export const JobContext = React.createContext() // Step 1

function UseContextApp() {
  return (
    <UserContext.Provider value="sudhir">
      <JobContext.Provider value="Senior Software Developer">
        {' '}
        {/*Step 2 - wrap , stem 3 - provied value*/}
        <div>
          <C />
        </div>
      </JobContext.Provider>
    </UserContext.Provider>
  )
}

export default UseContextApp
/* 
Step 1. Create a context and export = > UserContext =React.createContext
2. Provide this context with value ; Provider must wrap to the components to which value must be available. 
 <UserContext.Provider>
     <App/>
  </UserContext.Provider>

  3. Provide value 
  <UserContext.Provider value="Sudhir">
     <App/>
  </UserContext.Provider>

  4. Import context in child component 
   <UserContext.Consumer> 
       
    <UserContext.Consumer> 
*/
