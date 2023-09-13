import Students from "./best_students";
import Cards from "./cards";
import Enrolments from "./latest_enrolments";


export default function Overview(){
    return <>
     <div className=" flex-col space-y-[32px] w-[1280px] h-[1024px]  px-[24px] py-[36px] bg-[#F4F4F4]">
        <Cards/>
        <Enrolments/>
        <Students/>
        
     </div>
    
    </>
}