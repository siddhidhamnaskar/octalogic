import logo from "../assets/Logo.png"
import Frame1 from "../assets/Frame 4.png"
import Frame2 from "../assets/Frame 5.png"
import {useState} from "react"
import Frame3 from "../assets/Frame 6.png"

export default function Navbar(){
     const [pointer1,setPointer1]=useState("pointer")
     const [pointer2,setPointer2]=useState("arrow")
    return <>
        <div className="w-[96px] h-[1024px] w-fixed h-fixed py-5 bg-[white] border-r-[1px] flex-column space-y-10  ">
            <div className="w-12  m-auto">
                <img className="w-full" src={logo} />
                
            </div >
            < div className="w-18  m-auto  flex-column space-y-4 ">
            <div className="w-full m-auto">
            <img className={`w-18  m-auto  cursor-${pointer1}`} src={Frame1} />
          
            </div>
            <div  className="w-full m-auto">
            <img className={`w-18 m-auto  cursor-${pointer2}`} src={Frame2} />
         
            </div>
            </div>

           <div className="w-[72px]  m-auto ">
            
            <img className={`w-18  m-auto mt-[740px] cursor-pointer  flex flex-col items-end `} src={Frame3} />
           </div>

        </div>


    </>
}