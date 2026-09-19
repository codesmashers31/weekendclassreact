import { Route, Routes } from "react-router-dom"
import NavBar from "../components/NavBar"
import Direct_Rendering from "../pages/Direct_Rendering"
import String_Rendering from "../pages/String_Rendering"
import NumberRendering from "../pages/NumberRendering"
import BooleanRendering from "../pages/BooleanRendering"
import Arrayrendering from "../pages/Arrayrendering"


const AppRoutes = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Direct_Rendering/>}  />
        <Route path="/string" element={<String_Rendering/>}  />
        <Route path="/number" element={<NumberRendering />}/>
        <Route path="/boolean" element={<BooleanRendering />}/>

        <Route path="/array" element={<Arrayrendering />}/>

    </Routes>
    </>
  )
}

export default AppRoutes