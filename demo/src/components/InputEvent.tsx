import React from 'react'

type inputProps = {
    value:string,
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputEvent ({value,handleChange}:inputProps) {
  return (
    <div>
        <input type='text' value={value} onChange={handleChange}/>
    </div>
  )
}