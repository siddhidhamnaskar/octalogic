import { TableDemo } from "@/layouts/course_list";
import Navbar from "../layouts/student_navigation";


export default function Courses(){
    return<>
    <div className="flex w-[1376px] ">

        <Navbar />
        
       
        <TableDemo/>
        
   
    </div>
      
      
    </>
}