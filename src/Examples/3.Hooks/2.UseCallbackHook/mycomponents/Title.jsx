import React from 'react'

function Title() {
  console.log('Rendering Title')
  return <div>useCallBack Hook</div>
}

export default React.memo(Title)
