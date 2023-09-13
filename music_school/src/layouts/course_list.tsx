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
  
  

  import {BsThreeDotsVertical} from "react-icons/bs"
  import FAB from "../assets/Extended FAB.png"
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  
  export function TableDemo() {
    return <>
    <div className=" flex-col space-y-[32px] font-[Nunoto Sans] w-[1280px] px-[24px] py-[36px] bg-[#F4F4F4]">
      <div className="w-[1212px] m-auto">
      <p className="w-[104px] h-[38px] family-Nunito Sans text-[28px] font-medium text-[#83858B]">Courses</p>
    </div>
   
   <div className="flex-col space-y-[16px]">
   <div className="w-[1212px] flex justify-between m-auto items-center">
      <p className="text-[16px] font-[500] text-[Nunito Sans] text-[#83858B] ">COURSE LIST</p>
      <div>
        <Input type="search" className="w-[223px] h-[32px] rounded-[4px] bg-[#FFFFFF] border-[#F4F4F4]]" placeholder="Search" />
      </div>
      </div>
      <Table className="font-sans" >
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow className="text-left">
            <TableHead className="">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead >Amount</TableHead>
            <TableHead className="font-medium text-left">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice} className="text-left">
              <TableCell >{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell >{invoice.totalAmount}</TableCell>
              <TableCell className=" justify-end items-center"><BsThreeDotsVertical/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    
  <div>
           <div className="w-[1240px] flex justify-end" >
<Dialog >
  <DialogTrigger >

            <button><img  className="mt-[350px]" src={FAB}/></button>
     

  </DialogTrigger>
  <DialogContent className="w-[495px] flex-col aligh-center space-y-[16px] justify-center bg-[#FFFFFF] items-start">
     <div className="w-[495px] h-[377px] flex-col space-y-[16px] bg-[#FFFFFF]  rounded-[8px] p-[16px]">
         <p className="font-[400] text-[22px] font-[Nunito Sans] leading-[30.01px]">Add Course</p>
         <div className="w-[463px] flex-col space-y-[8px]">
          <Input className="border-[[#F4F4F4]] h-[32px] font-[Nunito Sans] font-[400] text-[#83858B]" type="text" placeholder="Course Name"></Input>
          <Input className="border-[#F4F4F4]]  h-[32px]  font-[400] text-[#83858B]" type="text" placeholder="Course Name"></Input>
          <Input className="border-[#F4F4F4]]  h-[32px]  font-[400] text-[#83858B]" type="text" placeholder="Course Name"></Input>
          <Input className="border-[#F4F4F4]]  h-[32px]  font-[400] text-[#83858B]" type="text" placeholder="Course Name"></Input>
          <Input className="border-[#F4F4F4]]  h-[32px]  font-[400] text-[#83858B]" type="text" placeholder="Course Name"></Input>
          <Input className="border-[#F4F4F4]]  h-[32px]  font-[400] text-[#83858B]" type="text" placeholder="Course Name"></Input>

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
  