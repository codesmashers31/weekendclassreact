// import { useRef, useState } from "react"

import { useContext, useRef } from "react"
import UserContextNew from "./context/UserContextNew"
import ClickTOChange from "./components/ClickTOChange"


// const App = () => {

//   console.log('Running');

//   const [userData,setUserData] = useState("")
  

//   const inputRef = useRef(null)

//   let showRef = useRef(null)

//   const handleChange = (e)=>{

//     //console.log(inputRef.current.value)

//     // showRef.current.textContent = inputRef.current.value
   
   

//   }

//   return (
//     <>
//      <input type="text" onChange={handleChange} ref={inputRef} />
//      <p ref={showRef}></p>

//      {userData}
//     </>
//   )
// }

// export default App






// const App = () => {


//   const timer = useRef(0)
//   const showingTimer = useRef(0)


//   const startTimer = ()=>{
//      let count = 0
//     timer.current = setInterval(()=>{

//       //console.log();

      

       
       

//       showingTimer.current.textContent = count++
      
              
//     },1000)

//   }

//  const stopTimer = ()=>{


//   clearInterval(timer.current)



//  }



//   return (
//     <>
//     <p ref={showingTimer}></p>
//     <button onClick={startTimer}>Start</button>
//     <button onClick={stopTimer}>Stop</button>
//     </>
//   )
// }

// export default App


const App = () => {
  
  const {theme,themeChnage} = useContext(UserContextNew)

  return (
    <>
    <p>{theme?"Running":"Stop RUnning"}</p>
    <button onClick={themeChnage}>Click to change</button>



    <ClickTOChange/>
    </>
  )
}

export default App