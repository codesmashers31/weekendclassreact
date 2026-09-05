import { useState } from "react"
import UserContextNew from "../context/UserContextNew"


const UserProviders = ({children}) => {

    const [theme,setTheme] = useState(true)

    const themeChnage = ()=>{

        setTheme(!theme)

    }
  return (
    <>
    <UserContextNew.Provider value={{theme,setTheme,themeChnage}}>

      {children}

    </UserContextNew.Provider>
    </>
  )
}

export default UserProviders