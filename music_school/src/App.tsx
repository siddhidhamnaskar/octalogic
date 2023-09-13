import {Route,Routes} from "react-router-dom";
import Home from "./pages/home"
import Courses from "./pages/course";




function App() {


  return (
    <>
  
  
      <Routes>
        <Route path="/" element={<Home/>}></Route>


      </Routes>
      <Routes>
        <Route path="/course" element={<Courses/>}></Route>


      </Routes>
    
    </>
  )
}

export default App
