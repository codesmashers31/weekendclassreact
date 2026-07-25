import { useRoutes } from "react-router-dom"


const Arrayrendering = () => {

  const arr = [1,2,3,4,5,6]

  const obj = {name:"react",course:"JS",fees:2000,doj:{firstday:2345,secondday:7464}}


  const arrobj = [

    {name:"react",course:"JS",fees:2000,skills:[1,2,3]},
    {name:"Node",course:"JS",fees:4000,skills:[1,2,3]},
    {name:"Java",course:"JS",fees:6000,skills:[1,2,3]},
    {name:"python",course:"JS",fees:8000,skills:[1,2,3]},
    {name:"AI",course:"JS",fees:8000,skills:[1,2,3]}
]


const handelClick = (users)=>{


    console.log(users);
    

}

  return (
    <>
  
     {arr.map((e,i)=>(
        <p className="bg-black mx-5  text-white p-3 my-2 w-50 h-50" key={i+1}>{e}</p>
     ))}




   <div className="bg-black mx-5  text-white p-3 my-2 w-50 h-50">
         <h1>{obj.name}</h1>
     <h1>{obj.course}</h1>
     <h1>{obj.fees}</h1>
     
   </div>



   <div className="flex bg-black  gap-5 justify-evenly flex-wrap items-center p-10">


    {arrobj.map((e,i)=>(
        <div className="bg-white text-black p-3 h-50 w-200 rounded" key={i+1}>
          
          <h1>{e.name}</h1>
         <p>{e.course}</p>
         <p>{e.fees}</p>
         <div className="flex justify-center items-center gap-3 my-5">
            {
            e.skills.map((e,i)=>(
            <p className="bg-black text-white rounded w-20 text-center" key={i}>{e}</p>
         ))
         }
         </div>
         <button onClick={()=>handelClick(e)} className="bg-green-500  text-white p-1 w-20 rounded mx-2">Edit</button>
         <button className="bg-red-500 text-white p-1 w-20 rounded">Delete</button>

        </div>
    ))}


   </div>
    
    </>
  )
}

export default Arrayrendering





// arr.map((e,i)=>(
    



// ))