import { TableDemo } from "@/layouts/course_list";
import Navbar from "../layouts/student_navigation";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Courses(){
    const navigate=useNavigate();

    useEffect(()=>{
        const token=localStorage.getItem("email");
        if(!token)
        {
            navigate("/login")
        }
        
    },[])

    return<>
    <div className="flex w-[1376px] ">

        <Navbar />
        
       
        <TableDemo/>
        
   
    </div>
      
      
    </>
}