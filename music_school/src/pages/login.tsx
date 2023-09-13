import { Input  } from "@/components/ui/input"
import { Link } from "react-router-dom"


export default function Login(){
    return <>
<div className="w-full h-[700px]  bg-[#F4F4F4] m-auto flex items-center">

<div className="w-[395px] h-[477px] m-auto flex-col space-y-[16px] bg-[#FFFFFF]  rounded-[8px] p-[16px]">
         <p className="font-[600] text-[#D1D5DB] text-[32px] font-[Nunito Sans] leading-[30.01px] text-center mb-[100px] mt-[50px]">LOGIN</p>
         <div className="w-[363px] flex-col space-y-[20px] mt-[100px]">
          <Input  className="border-[[#F4F4F4]] h-[50px] font-[Nunito Sans] font-[400] text-[#83858B]" type="email" placeholder="Email"></Input>
          <Input className="border-[[#F4F4F4]]   h-[50px]  font-[400] text-[#83858B]" type="password" placeholder="Password"></Input>
         
         </div>
         <div className="w-full m-auto flex justify-center space-x-[10px] ">
         
        <Link to={"/"}><div className="w-[155px] m-auto h-[35px] flex  rounded-[4px] px-[8px] bg-[#FEC0CA] mt-[50px]">
          <p className="text-[14px] m-auto font-[400] leading-[19.1px] font-[Nunito Sans]">SUBMIT</p>
        </div>
        </Link>
     </div>
     </div>
     </div>
    
    
    </>
}