import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"


  import {
    Dialog,
    DialogContent,
  
    DialogTrigger,
  } from "@/components/ui/dialog"

  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  
  import axios from "axios"
  

  import {BsThreeDotsVertical} from "react-icons/bs"
  import FAB from "../assets/Extended FAB.png"
import { useEffect, useState } from "react"
 
  
  export function TableDemo() {
   const [data,setData]=useState([{id:1,name:"",description:"",instuctor:"",instrument:"",language:"",price:"",status:"",students:""}]);
   const [value,setValue]=useState("")
   useEffect(()=>{

    axios.get(`https://octalogic-course-data.onrender.com/data/?_limit=10`)
    .then(response => {
        const posts = response;
        console.log(posts);
        setData(posts.data)
    })
   },[])
  


   const search=()=>{
    axios.get(`https://octalogic-course-data.onrender.com/data?q=${value}&_limit=10`)
    .then(response => {
        const posts = response;
        console.log(posts);
        setData(posts.data)
    })


   }
    
   
 

    return <>
    <div className="h-[1024px] flex-col space-y-[32px] font-[Nunoto Sans] w-[1280px] px-[24px] py-[36px] bg-[#F4F4F4]">
      <div className="w-[1212px] m-auto">
      <p className="w-[104px] h-[38px] family-Nunito Sans text-[28px] font-medium text-[#83858B]">Courses</p>
    </div>
   
   <div className="flex-col space-y-[16px]">
   <div className="w-[1212px] flex justify-between m-auto items-center">
      <p className="text-[16px] font-[500] text-[Nunito Sans] text-[#83858B] ">COURSE LIST</p>
      <div>
        <Input type="search" onChange={(e)=>{setValue(e.target.value); search()}} className="w-[223px] h-[32px] rounded-[4px] bg-[#FFFFFF] border-[#F4F4F4]]" placeholder="Search" />
      </div>
      </div>
      <Table className="font-sans" >
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className="text-left">
            <TableHead className="">Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Instructor</TableHead>
            <TableHead >Instrument</TableHead>
            <TableHead >Language</TableHead>
            <TableHead >Studens</TableHead>
            <TableHead >Price</TableHead>
            <TableHead >Status</TableHead>
            <TableHead className="font-medium text-left">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((elem) => (
            <TableRow key={elem.id} className="text-left">
              <TableCell >{elem.instrument}</TableCell>
              <TableCell>{elem.description}</TableCell>
              <TableCell>{elem.instuctor}</TableCell>
              <TableCell >{elem.instrument}</TableCell>
              <TableCell >{elem.language}</TableCell>
              <TableCell >{elem.students}</TableCell>
              <TableCell >{elem.price}</TableCell>
              <TableCell >{elem.status}</TableCell>
              <TableCell className=" justify-end items-center">
              <Popover>
  <PopoverTrigger><BsThreeDotsVertical/></PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    
  <div>
           <div className="w-[1240px] flex justify-end" >
<Dialog >
  <DialogTrigger >

            <button><img  className="mt-[230px] mr-[50px]" src={FAB}/></button>
     

  </DialogTrigger>
  <DialogContent className="w-[495px] flex-col aligh-center space-y-[16px] justify-center bg-[#FFFFFF] items-start">
     <div className="w-[495px] h-[377px] flex-col space-y-[16px] bg-[#FFFFFF]  rounded-[8px] p-[16px]">
         <p className="font-[400] text-[22px] font-[Nunito Sans] leading-[30.01px]">Add Course</p>
         <div className="w-[463px] flex-col space-y-[8px]">
          <Input className="border-[[#F4F4F4]] h-[32px] font-[Nunito Sans] font-[400] text-[#83858B]" type="text" placeholder="Course Name"></Input>
          <Input className="border-[#F4F4F4]]  h-[32px]  font-[400] text-[#83858B]" type="text" placeholder="Description"></Input>
          <Input className="border-[#F4F4F4]]  h-[32px]  font-[400] text-[#83858B]" type="text" placeholder="Instructor"></Input>
          <Input className="border-[#F4F4F4]]  h-[32px]  font-[400] text-[#83858B]" type="text" placeholder="Instrument"></Input>
          <Input className="border-[#F4F4F4]]  h-[32px]  font-[400] text-[#83858B]" type="text" placeholder="Day of the week "></Input>
          <Input className="border-[#F4F4F4]]  h-[32px]  font-[400] text-[#83858B]" type="text" placeholder="Price"></Input>

         </div>
         <div className="w-[463px] flex justify-end space-x-[10px]">
          <div className="w-[75px] h-[35px] flex justify-center rounded-[4px] px-[8px]">
           <p className="text-[14px] m-auto font-[400] leading-[19.1px] font-[Nunito Sans]">Cancel</p>
           </div>
        <div className="w-[106px] h-[35px] flex  rounded-[4px] px-[8px] bg-[#FEC0CA]">
          <p className="text-[14px] m-auto font-[400] leading-[19.1px] font-[Nunito Sans]">Add Course</p>
        </div>
     </div>
     </div>
    
   
  </DialogContent>
</Dialog>


</div>
      </div>




      </div>
      
 

    
    </>
  }
  