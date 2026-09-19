import { Link, NavLink, useNavigate } from "react-router-dom"


const NavBar = () => {
  
  const navigate = useNavigate()

  const login = ()=>{

 navigate("/login")

  }


  return (
    <div className="bg-orange-400 text-white p-3 flex items-center justify-around">
        <div>Logo</div>
        <div className="flex gap-20">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/project">Project</Link>
            {/* <Link to="/task">Task</Link> */}
            <NavLink to = "/task" className={({isActive})=>isActive && "bg-black text-white p-1 rounded w-25 text-center"}>Task</NavLink>
        </div>
        <button onClick={login} className="bg-blue-600 text-white p-1 rounded w-50">Login</button>
    </div>
  )
}

export default NavBar