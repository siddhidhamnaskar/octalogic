import {Route,Routes} from "react-router-dom";
import Home from "./pages/home"
import Courses from "./pages/course";
import Login from "./pages/login";




function App() {


  return (
    <>
  
  
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
    
        <Route path="/course" element={<Courses/>}></Route>


      </Routes>
    
    </>
  )
}

export default App
