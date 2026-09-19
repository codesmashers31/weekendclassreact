import React, { useContext } from 'react'
import UserContextNew from '../context/UserContextNew'

const ClickTOChange = () => {
    const {theme,themeChnage} = useContext(UserContextNew)
  return (
   <>
   <p>{theme?"Running":"Stop RUnning"}</p>
    <button onClick={themeChnage}>Click to change</button>
   </>
  )
}

export default ClickTOChange