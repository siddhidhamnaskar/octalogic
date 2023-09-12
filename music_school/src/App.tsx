import {Route,Routes} from "react-router-dom";
import OverView from "./pages/overview"




function App() {


  return (
    <>
  
  
      <Routes>
        <Route path="/" element={<OverView/>}></Route>


      </Routes>
    
    </>
  )
}

export default App
