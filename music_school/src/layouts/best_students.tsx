import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

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
   
  ]
  




export default function Students(){
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
            <TableHead className="font-medium">Invoice</TableHead>
            <TableHead className="font-medium">Status</TableHead>
            <TableHead className="font-medium">Method</TableHead>
            <TableHead className="font-medium">Amount</TableHead>
          
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice} className="text-left">
              <TableCell >{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell >{invoice.totalAmount}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </>
}