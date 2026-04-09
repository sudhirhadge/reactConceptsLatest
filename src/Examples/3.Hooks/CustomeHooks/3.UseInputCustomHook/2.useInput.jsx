/*
what our customHook to do is to encapsulate below controlled component beahvior for an input element.

value={firstName}
onChange={(e) => setFirstName(e.target.value)}
 That is binding value and onchnge activity.
*/

import { useState } from 'react'

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const reset = () => {
    setValue(initialValue)
  }

  const bind = {
    value: value,
    onChange: (e) => setValue(e.target.value),
  }

  /* Or this could have been written as - 
const bind = {
    value,
    onChange: (e) => setValue(e.target.value),
  }
  */

  return [value, bind, reset]
}

export default useInput
