import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { CiSearch } from "react-icons/ci";
import {CarMakes, Pricing} from "@/components/shared/data"

function Search() {
  return (
    <div className='p-5 gap-5 w-[90%] flex flex-col md:flex-row items-center justify-center bg-gray-50'>
        <Select className='w-full bg-white'>
            <SelectTrigger className=" w-full md:w-[480px]" >
                <SelectValue placeholder="Cars" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">New</SelectItem>
                <SelectItem value="dark">Old</SelectItem>
            </SelectContent>
        </Select>

        <Select>
            <SelectTrigger className=" w-full md:w-[480px]">
                <SelectValue placeholder="Car Makes" />
            </SelectTrigger>
            <SelectContent>
              {CarMakes.map((make, index) => (
                <SelectItem key={make.id} value={make.name}>{make.name}</SelectItem>
              ))}
            </SelectContent>
        </Select>

        <Select>
            <SelectTrigger className=" w-full md:w-[480px]">
                <SelectValue placeholder="Pricing" />
            </SelectTrigger>
            <SelectContent>
            {Pricing.map((Pricing, index) => (
                <SelectItem key={Pricing.id} value={Pricing.amount}>{Pricing.amount}</SelectItem>
              ))}
               
            </SelectContent>
        </Select>
        <CiSearch className='text-2xl font-semibold  '/>
    </div>
  )
}

export default Search