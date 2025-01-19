import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Comp6Info } from "./utils/interface"
import { Box } from "lucide-react"
import { getCommaseparated } from "./utils/controller"

export function ProductsTable({products}: {products: Comp6Info | null}) {

    return (
        <Table>
        <TableHeader>
            <TableRow >
            <TableHead className="w-[20rem]">Product</TableHead>
            <TableHead>Sold amount</TableHead>
            <TableHead>Unit Price</TableHead>
            <TableHead>Revenue</TableHead>
            <TableHead>Rating</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {products && products.map((product: Comp6Info) => (
                <TableRow key={product.product} className="border-none my-5 ">
                    <TableCell className="flex items-center">
                        <Box size={32} className="bg-gray-100 p-2 rounded-md"/>
                        <span className="ml-2 font-medium">{product.product}</span>
                    </TableCell>

                    <TableCell className="font-semibold text-gray-500">{product.sold_amount}</TableCell>
                    <TableCell className="font-semibold text-gray-500">{"$"+getCommaseparated(product.unit_price) }</TableCell>
                    <TableCell className="font-semibold text-gray-500">{"$"+getCommaseparated(product.revenue)}</TableCell>
                    <TableCell className="flex gap-2 items-center relative bottom-2 font-semibold">
                        <img src="https://cdn-icons-png.flaticon.com/128/12709/12709532.png" className="h-4" alt="star icon" />
                        {product.rating}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
        </Table>
    )
}
  
  