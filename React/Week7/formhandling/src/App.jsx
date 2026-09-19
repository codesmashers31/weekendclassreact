// import { useEffect, useState } from "react"

import { useEffect, useState } from "react"


// const App = () => {

//   const [saveData,setSaveData] = useState({username:"",userage:"",useremail:""})
//   const [pushData,setpushData] = useState([])
//   const [editid,setEditid] = useState(null)
// const handleChange = (e)=>{


// setSaveData({...saveData,[e.target.name]:e.target.value})


// }

// const handleClick = (e)=>{

//   e.preventDefault()

//   let getData = JSON.parse(localStorage.getItem("registerprocess")) || []

//   getData.push(saveData) 
  
//   localStorage.setItem("registerprocess",JSON.stringify(getData))
  
//   alert("Succeaasfully done")

//   setSaveData({username:"",userage:"",useremail:""})

// }

// const getLocaldata = ()=>{

//   const get = localStorage.getItem("registerprocess")
  
//   const change = JSON.parse(get)

  
//   setpushData(change)



// }

// useEffect(()=>{
//   getLocaldata()
// },[saveData])


// const editData = (users,id)=>{


// setSaveData(users)
// setEditid(id)



// }

// const deletedata = (userid)=>{



//   const deleteDatas = pushData.filter((_,i) => i !== userid)

//   //console.log(deleteDatas);

  

//   localStorage.setItem("registerprocess",JSON.stringify(deleteDatas))

//   alert("Deleted Successfully")

//   getLocaldata()
  

// }

// const updateclick = (e)=>{

//   e.preventDefault()
  
//   const newget = JSON.parse(localStorage.getItem("registerprocess"))

//   const get = newget.map((e,i)=>i==editid?saveData:e)

//   // console.log(get);
//  getLocaldata()
//   localStorage.setItem("registerprocess",JSON.stringify(get))
//   alert('updated succefully')

//   setSaveData({username:"",userage:"",useremail:""})
  
//   setEditid(null)
  
// }

//   return (
//     <>
//     <h1>Form Handling</h1>
//     <form>
//       <input type="text" onChange={handleChange} value={saveData.username} name="username" placeholder="Enter the Name" />
//       <input type="number" onChange={handleChange} value={saveData.userage} name="userage" placeholder="Enter the Age" />
//       <input type="email" onChange={handleChange} value={saveData.useremail} name="useremail" placeholder="Enter the Email" />
//       {editid===null?<button onClick={handleClick}>Regsiter</button>:<button onClick={updateclick}>Update</button>}
      
//     </form>

//     <div>
//       {pushData.map((e,i)=>(
//         <div key={i+1}>
//           <p>{e.username}</p>
//           <p>{e.userage}</p>
//           <p>{e.useremail}</p>
//           <button onClick={()=>editData(e,i)}>Edit</button>
//           <button onClick={()=>deletedata(i)}>Delete</button>
//         </div>
//       ))}
//     </div>
//     </>
//   )
// }

// export default App






const App = () => {

 const [timers,setTimers] = useState(0)



useEffect(()=>{

 

  const mytime = setInterval(()=>{

    setTimers((p)=>{
       if (p === 5) {
          return 0;
        }

        return p + 1
    })

  },1000)

 
 

  return ()=>clearInterval(mytime)
  

},[])



  return (

    <>
    <h1>{timers}</h1>
    </>
    
  )
}

export default App