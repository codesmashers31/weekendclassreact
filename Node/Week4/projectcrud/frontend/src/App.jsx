import { useEffect, useState } from "react"
import axios from 'axios'

const App = () => {

  const [formdata,setFormData] = useState({
    username:"",
    userage:"",
    useremail:""
})

const [getdatas,setGetDatas] = useState([])

const [editid,setEditId] = useState(null)

const [serach,setSerach] = useState("")

  const handleChange = (e)=>{

    setFormData({...formdata,[e.target.name]:e.target.value})

  }

    const getData = async()=>{

    try {
      const res = await axios.get("http://localhost:5000/api/crud/getting")
      
    setGetDatas(res.data.get)

    } catch (error) {

      alert(error.response.data.msg)
      
    }


  }

  const handleSerach = (e)=>{

     setSerach(e.target.value)

  }

  let datasNew = [...getdatas]

  if(serach){

    datasNew = datasNew.filter((e)=>e.username.toLowerCase().includes(serach.toLowerCase()))

  }

  useEffect(()=>{
    getData()
  },[])

  const handleClick = async(e)=>{

    e.preventDefault()
   
    try {

      const datassend = await axios.post("http://localhost:5000/api/crud/adding",formdata)
      
      //console.log(datassend.data.msg);
      alert(datassend.data.msg)
     
      setFormData({
    username:"",
    userage:"",
    useremail:""
})

getData()


    } catch (error) {

      //console.log(error.response);
      alert(error.response.data.msg)
      
      
    }


    
  }


  const handleEdit = (datas)=>{

      setFormData(datas)
      setEditId(datas._id)

  }

const handleUpdate = async(e)=>{

  e.preventDefault()
 
  try {

    const updateDatas = await axios.put(`http://localhost:5000/api/crud/updateing/${editid}`,formdata)
    
    alert(updateDatas.data.msg)
setFormData({
    username:"",
    userage:"",
    useremail:""
})

setEditId(null)
getData()

  } catch (error) {

    alert(error.response.data.msg)
    
  }


}


const handleDelete = async(userid)=>{

 try {

  const deleteDatas = await axios.delete(`http://localhost:5000/api/crud/deleteing/${userid}`)

  alert(deleteDatas.data.msg)

  getData()
  
 } catch (error) {
    alert(error.response.data.msg)
 }
 
}



  return (
  <>
    <form>
      
      <input type="text" name="username" onChange={handleChange} placeholder="Enter the username" value={formdata.username} />
      <input type="number" name="userage" onChange={handleChange} placeholder="Enter the userage" value={formdata.userage} />
      <input type="email" name="useremail" onChange={handleChange} placeholder="Enter the useremail" value={formdata.useremail} />
      {editid==null? <button onClick={handleClick}>Adding</button>: <button onClick={handleUpdate}>Update</button>}
     
    </form>
   
 <br /><br />
   <div>
    <input type="text" placeholder="Serach by name" onChange={handleSerach} />
   </div>

    <div>
      {datasNew.map((e,i)=>(
        <div key={i+1}>
          <h3>{e.username}</h3>
          <p>{e.userage}</p>
          <p>{e.useremail}</p>
          <button onClick={()=>handleEdit(e)}>Edit</button>
          <button onClick={()=>handleDelete(e._id)}>Delete</button>
        </div>
      ))}
    </div>
  </>
   
    
  )
}

export default App