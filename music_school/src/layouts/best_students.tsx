import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  import {useState ,useEffect} from "react"
  import axios from "axios"




export default function Students(){
  const [data,setData]=useState([{en_number:"",id:"",s_name:"",c_name:"",fees:"",date:"",course:""}])
  useEffect(()=>{

    axios.get(`https://rich-jumpsuit-hen.cyclic.app/students`)
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
        <p className="text-[16px] font-medium text-[Nunito Sans] text-[#83858B] ">BEST STUDENTS</p>
        </div>
        <div>
         <p className="text-[14px] text-[#901E75] font-sans">View All Courses</p>
        </div>
     </div>

      <Table className="font-sans" >
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className="text-left font-medium">
            <TableHead className="font-medium">Reg.No</TableHead>
            <TableHead className="font-medium">F.Name</TableHead>
            <TableHead className="font-medium">L.Name</TableHead>
            <TableHead className="font-medium">Course #</TableHead>
            <TableHead className="font-medium">Total Fees</TableHead>
            <TableHead className="font-medium">Reg.Date</TableHead>
          
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((elem) => (
            <TableRow key={elem.id} className="text-left">
              <TableCell >{elem.en_number}</TableCell>
              <TableCell>{elem.s_name}</TableCell>
              <TableCell>{elem.c_name}</TableCell>
              <TableCell >{elem.course}</TableCell>
              <TableCell >{elem.fees}</TableCell>
              <TableCell >{elem.date}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </>
}