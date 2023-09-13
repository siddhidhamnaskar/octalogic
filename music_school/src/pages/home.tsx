import Overview from "@/layouts/OverView"

import Navbar from "@/layouts/student_navigation"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Home(){
    const navigate=useNavigate();

    useEffect(()=>{
        const token=localStorage.getItem("email");
        if(!token)
        {
            navigate("/login")
        }
        
    },[])


    return<>

<div className="flex w-[1376px] bg-[#F4F4F4]  ">

<Navbar />
<Overview/>



</div>

    </>
}