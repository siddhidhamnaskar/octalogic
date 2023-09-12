import {Route,Routes} from "react-router-dom";
import OverView from "./pages/overview"
import Courses from "./pages/course";




function App() {


  return (
    <>
  
  
      <Routes>
        <Route path="/" element={<OverView/>}></Route>


      </Routes>
      <Routes>
        <Route path="/course" element={<Courses/>}></Route>


      </Routes>
    
    </>
  )
}

export default App
