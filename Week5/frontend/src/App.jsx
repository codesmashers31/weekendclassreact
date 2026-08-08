// import { useState } from "react"

import { useEffect, useState } from "react"


// const App = () => {
 
//   console.log('Running Components');
  

// const [number,setNumber] = useState(true)

//   // let number = 10

//   const handleClick = ()=>{

//     // number = number+1
//     // number++ 

//     // console.log(number);

//     setNumber(!number)
    
    

//   }


 
 

//   return (
//     <>
//     <h1>{number?"Running":"Non RUnning"}</h1>
//     {/* <button onClick={handleClick}>Click</button> */}
//     </>
//   )
// }

// export default App




// const App = () => {

//   const [isActive,setIsActive] = useState(1)


//   const handleclick = ()=>{

// // setIsActive(!isActive)
// setIsActive(undefined)

//   }

//   return (
//     <>

//       <div className="bg-amber-300 p-10 h-100">
       
//     {isActive?<div className="bg-white text-black p-3 rounded-2xl w-50 h-50 mb-5">
//       Box
//     </div>:<div className="bg-red-400 text-black p-3 rounded-2xl w-50 h-50 mb-5">
//       Box 1
//     </div>}


//     {isActive ?? <div className="bg-white text-black p-3 rounded-2xl w-50 h-50 mb-5">
//       Box
//     </div>}
    

    

//     <button onClick={handleclick} className="bg-black text-white p-1 w-25 rounded">{isActive?"Active":"InActive"}</button>
    

//       </div>

    
//     </>
//   )
// }

// export default App







const App = () => {

  console.log('running');
  

 const [arr,setArr] = useState([1,2,3,4,5,6])


 const [obj,setobj] = useState({username:"react",userage:30})


 const [arrobj,setArrObj] = useState([{username:"react",userage:30},{username:"Node",userage:60},{username:"Js",userage:80}])


const handleclick = ()=>{

// const copy = [...arr]

// const datas = copy.map((e)=>e)

// console.log(datas);


// datas[5] = 1000

// const arrcopy = [...arr]

// arrcopy.push(67)

// setArr(arrcopy)

// setobj({...obj,username:"node",userage:50})


const copy = [...arrobj]

const saparteintoone = copy.map((e)=>e)

console.log(saparteintoone);

saparteintoone[2].username = "React Process"

setArrObj(saparteintoone)


}

// mount

useEffect(()=>{
  console.log("UseEffect running");


  // return ()=>{
  //   console.log('running unmount');
    
  // }

  handleclick()
  
},[])

  return (
    <>
   {arrobj.map((e,i)=>(
    <p className="bg-amber-200 mb-2 m-2 p-2 w-50 h20" key={i+1}>{e.username}</p>
   ))}
    <button onClick={handleclick} className="bg-black text-white p-1 w-25 rounded">Click</button>
    
    <div className="bg-amber-300 p-10">
       <h1>{obj.username}</h1>
     <p>{obj.userage}</p>
    </div>
    
    </>
  )
}

export default App