import { Link } from "react-router-dom"


const NavBar = () => {
 

  return (
    <>
    <div className="bg-amber-200 flex justify-around p-3 items-center"> 
        <div>
            Logo
        </div>
        <div className="flex gap-15">
            <Link to="/">Direct</Link>
            <Link to="/string">String</Link>
            <Link to="/number">Number</Link>
            <Link to="/boolean">Boolean</Link>
            <Link to="/string">Undefind - Null</Link>
            <Link to={"/array"}>Array</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar