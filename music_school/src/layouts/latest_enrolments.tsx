import {
    Table,
    TableBody,
    
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useState,useEffect } from "react"
import axios from "axios"

  




export default function Enrolments(){
   const [data,setData]=useState([{en_number:"",id:"",s_name:"",c_name:"",fees:"",date:""}])
  useEffect(()=>{

    axios.get(`https://octalogic-course-data.onrender.com/enrolments`)
    .then(response => {
        const posts = response;
        console.log(posts);
        setData(posts.data)
    })
   },[])


    return <>
    <div className="w-[1212px] m-auto flex-col space-y-[16px]">
     <div className="flex justify-between w-[1212px] m-auto">
        <div className="">
        <p className="text-[16px] font-medium text-[Nunito Sans] text-[#83858B] ">LATEST ENROLMENTS</p>
        </div>
        <div>
         <p className="text-[14px] text-[#901E75] font-sans">View All Courses</p>
        </div>
     </div>
    

      <Table className="font-sans" >
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className="text-left font-medium">
            <TableHead className="font-medium">Enr.No</TableHead>
            <TableHead className="font-medium">S.Name</TableHead>
            <TableHead className="font-medium">C.Name</TableHead>
            <TableHead className="font-medium">Fees</TableHead>
            <TableHead className="font-medium">Enr.Date</TableHead>
          
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((elem) => (
            <TableRow key={elem.id} className="text-left">
                 <TableCell >{elem.en_number}</TableCell>
              <TableCell >{elem.s_name}</TableCell>
              <TableCell>{elem.c_name}</TableCell>
              <TableCell>{elem.fees}</TableCell>
              <TableCell >{elem.date}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </>
}