import { useNavigate } from "react-router-dom"


const Login = () => {
  const navigate = useNavigate()


    const handleclick=()=>{
navigate("/")
    }


  return (
    <div className="flex bg-amber-50 justify-center items-center h-100 pb-10">
        <div className="bg-blue-600 p-3 w-70 h-80">
           <form action="">
            <input type="text" placeholder="Enter the Name" name="" id="" />
            <input type="text" placeholder="Enter the Name" name="" id="" />
            <button onClick={handleclick}>Login</button>
           </form>
        </div>
    </div>
  )
}

export default Login