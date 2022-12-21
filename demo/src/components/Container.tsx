import React from 'react'

type containerProps = {
    style:React.CSSProperties
}

function Container(props:containerProps) {
  return (
    <div style={props.style}>
        Hi I am from container
    </div>
  )
}

export default Container