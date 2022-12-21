import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
type oscarOpt = {
    children:React.ReactNode    //Children Component 
}
function Oscar(props:oscarOpt) {
    console.log('oscar');
  return (
    <div>{props.children}</div>
  )
}

export default Oscar