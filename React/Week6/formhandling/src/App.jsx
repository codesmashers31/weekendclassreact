// import { useState } from "react";


// const App = () => {

//   const [number,setNumber] = useState("")
//   const [savedata,setSaveData] = useState([])

//   const handlechange = (e)=>{

//     //console.log(e.target.value);

//     setNumber(e.target.value)


//   }
  
//   const handleClick = ()=>{

//     let datas = [...savedata]

//     datas.push(number)

//     setSaveData(datas)

//   }


//   return (
    
//  <>
 
//    <div>
//     {savedata.map((e,i)=>(
//            <p key={i+1}>{e}</p>
//     ))}
    

//    </div>
//    <input type="text" onChange={handlechange} placeholder="Enter the Number" />
//    <button onClick={handleClick}>CLick to Add</button>
// </>

//   )
// }

// export default App



// import React, { useState } from 'react'

// const App = () => {

//   const [fromDatas,setfromdatas] = useState({username:"",userage:""})
//   const [datas,setDatas] = useState([])
//   const handleChange = (e)=>{

    
//     setfromdatas({...fromDatas,[e.target.name]:e.target.value})

//   }

//   const handleclick = (e)=>{

//     e.preventDefault()
  

//     let copy = [...datas]

//     copy.push(fromDatas)

//     setDatas(copy)
    
//     setfromdatas({username:"",userage:""})

//   }
//   return (
//     <>
//     <form >
//       <input type="text" value={fromDatas.username} onChange={handleChange} name='username' placeholder='Enter the name' />
//       <input type="text" value={fromDatas.userage} onChange={handleChange} name='userage' placeholder='Enter the Age' />
//       <input onClick={handleclick} type="submit" value={"Register"} />
//     </form>

     
//      <div>
//       {datas.map((e,i)=>(
//         <div key={i+1}>
//           <p>{i+1} <span>{e.username}</span> <span>{e.userage}</span></p>
  
//         </div>
//       ))}
//      </div>


//     </>
//   )
// }

// export default App



// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [fromDatas,setfromdatas] = useState({username:"",userage:""})
//   const [datas,setDatas] = useState([])
//   const handleChange = (e)=>{

    
//     setfromdatas({...fromDatas,[e.target.name]:e.target.value})
//     // console.log(fromDatas);
    
//     // setfromdatas({...fromDatas,username:"react"})

//   }

//   const handleclick = (e)=>{

//     e.preventDefault()
  

//     // let copy = [...datas]

//     // copy.push(fromDatas)

//     // setDatas(copy)

//     let local = JSON.parse(localStorage.getItem("registerData")) || []


//     local.push(fromDatas)

//     localStorage.setItem("registerData",JSON.stringify(local))
    
//     alert("Successfully done")
    
//     setfromdatas({username:"",userage:""})

//   }


//   const showDatas = ()=>{

//     const datas = localStorage.getItem("registerData")

//     const change = JSON.parse(datas)

//     console.log(change);

//     setDatas(change)
    

//   }

//   useEffect(()=>{
//     showDatas()


//   },[fromDatas])




//   return (
//     <>
//     <form >
//       <input type="text" value={fromDatas.username} onChange={handleChange} name='username' placeholder='Enter the name' />
//       <input type="text" value={fromDatas.userage} onChange={handleChange} name='userage' placeholder='Enter the Age' />
//       <input onClick={handleclick} type="submit" value={"Register"} />
//     </form>

     
//      <div>
//       {datas.map((e,i)=>(
//         <div key={i+1}>
//           <p>{i+1} <span>{e.username}</span> <span>{e.userage}</span></p>
  
//         </div>
//       ))}
//      </div>


//     </>
//   )
// }

// export default App


import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [datas,setDatas] = useState([])
  

  useEffect(()=>{
    const takeDatas = async()=>{


    const getDatas = await axios.get("https://dummyjson.com/users")

  
    //console.log(chanegData.products);

    console.log(getDatas);
    
    
    setDatas(getDatas.data.users)

    //console.log(chanegData.products);
    

    

  }
    takeDatas()
  },[])

  


  return (
    <>
    <div>
      {datas.map((e)=>(
        <div key={e.id}>
          <h1>{e.firstName}</h1>
          <p>{e.age}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default App
